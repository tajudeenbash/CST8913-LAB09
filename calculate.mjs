import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.dirname(fileURLToPath(import.meta.url));
const a=JSON.parse(fs.readFileSync(path.join(root,'inputs.json'),'utf8'));
const money=n=>n.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2,maximumFractionDigits:2});
const sum=xs=>xs.reduce((x,y)=>x+y,0);
const rows=[];
function add(group,name,quantity,rate,unit,status,growth=.2){rows.push({group,name,quantity,rate,unit,status,growth,monthly:quantity*rate});}
for(let i=0;i<3;i++){
 const r=a.regions[i],v=a.vm[r];
 add('Operations',`Web Linux D4s v5 — ${r}`,a.webPerRegion*a.hours,v.payg,'VM-hour','Verified',.2);
 add('Operations',`API Linux D4s v5 baseline — ${r}`,a.apiBase[i]*a.hours,v.payg,'VM-hour','Verified',.2);
 add('Operations',`API Linux D4s v5 burst — ${r}`,a.apiBurst[i]*a.burstHours,v.payg,'VM-hour','Verified',.2);
 add('Operations',`Payment Windows D4s v5 — ${r}`,a.paymentPerRegion*a.hours,v.windows,'VM-hour','Verified',.2);
 add('Operations',`Cosmos DB provisioned throughput — ${r}`,a.cosmosRUPerRegion/100*a.hours,a.cosmos[r].ru,'100 RU/s-hour','Verified',.25);
 add('Operations',`Cosmos DB logical data copy — ${r}`,a.cosmosGBPerRegion,a.cosmos[r].storage,'GB-month','Verified',.3);
 add('Operations',`Backup object storage copy — ${r}`,a.backupGBPerRegion,.02,'GB-month','Allowance',.3);
}
for(const r of ['eastus','westeurope']){
 add('Operations',`SQL MI GP Gen5 base compute — ${r}`,a.sqlVcoresPerInstance*a.hours,a.sql[r].payg,'vCore-hour','Verified',.2);
 add('Operations',`SQL MI zone redundancy compute — ${r}`,a.hours,a.sql[r].zone,'16-vCore instance-hour','Verified',.2);
 add('Operations',`SQL MI zone redundant storage — ${r}`,a.sqlStorageGBPerInstance,a.sql[r].storage,'GB-month','Verified',.3);
 add('Operations',`SQL licensing — ${r}`,a.sqlVcoresPerInstance*a.hours,a.sqlLicensePerCoreHourAllowance,'vCore-hour','Allowance',.2);
}
add('Operations','Premium managed OS disks (including burst disks)',76,20,'disk-month','Allowance',.2);
add('Operations','Regional load balancer fixed charge',3*730,.025,'LB-hour','Allowance',.1);
add('Operations','Regional load balancer data processing',20000,.005,'GB','Allowance',.25);
add('Operations','Front Door Premium base (WAF included)',1,330,'profile-month','Allowance',0);
add('Operations','Front Door client delivery blended geography/tier',100000,.1,'GB','Allowance',.25);
add('Operations','Front Door requests',100000000/10000,.015,'10,000 requests','Allowance',.25);
add('Operations','Front Door origin traffic allowance',20000,.02,'GB','Allowance',.25);
add('Operations','Cross-region replication: 2 destinations',10000,.08,'GB transferred','Allowance',.3);
add('Operations','Direct outbound traffic excluding Front Door',2000,.1,'GB','Allowance',.25);
add('Operations','Regional firewalls fixed and processing allowance',3,1000,'region-month','Allowance',.1);
add('Operations','Private endpoints, DNS and peering allowance',3,100,'region-month','Allowance',.1);
add('Operations','Warehouse ADLS logical data (ZRS allowance)',15000,.023,'GB-month','Allowance',.3);
add('Operations','Synapse serverless query scans',200,5,'TB scanned','Allowance',.25);
add('Operations','ML NC4as T4 v3 East US',2*160,a.gpu,'GPU VM-hour','Verified',.25);
add('Operations','Azure Batch Linux D4s v5 East US',10*60,a.vm.eastus.payg,'VM-hour','Verified',.25);
add('Operations','Data pipelines orchestration allowance',1,150,'month','Allowance',.25);
add('Operations','Backup protection fee allowance',56,10,'protected VM-month','Allowance',.2);
add('Operations','Backup restore tests, transactions and version overhead',1,300,'month','Allowance',.3);
add('Operations','SQL native backup storage above included entitlement',10000,.1,'GB-month','Allowance',.3);
add('Management','Application/platform Log Analytics ingestion',600,2.76,'GB','Allowance',.25);
add('Management','Sentinel security logs combined ingestion allowance',150,5,'GB','Allowance',.25);
add('Management','Long-term log archive/retention',1000,.03,'GB-month','Allowance',.3);
add('Management','Alerts, metrics and synthetic monitoring',1,150,'month','Allowance',.2);
add('Management','Defender for Servers effective instance-months',60,15,'VM-month','Allowance',.2);
add('Management','Defender for SQL, storage and Key Vault allowance',1,150,'month','Allowance',.2);
add('Management','Azure support allowance',1,1000,'month','Allowance',.1);
add('Management','Native Cost Management, budgets, tags and Advisor',1,0,'month','No incremental fee assumed',0);
const op=sum(rows.filter(x=>x.group==='Operations').map(x=>x.monthly));
const mgmt=sum(rows.filter(x=>x.group==='Management').map(x=>x.monthly));
const total=op+mgmt;
const baseCount=i=>a.webPerRegion+a.paymentPerRegion+a.apiBase[i];
const basePayg=sum(a.regions.map((r,i)=>baseCount(i)*a.hours*a.vm[r].payg));
const ri1=sum(a.regions.map((r,i)=>baseCount(i)*a.vm[r].one/12));
const ri3=sum(a.regions.map((r,i)=>baseCount(i)*a.vm[r].three/36));
const sqlPayg=sum(Object.values(a.sql).map(x=>a.sqlVcoresPerInstance*a.hours*x.payg));
const sql1=sum(Object.values(a.sql).map(x=>a.sqlVcoresPerInstance*x.one/12));
const sql3=sum(Object.values(a.sql).map(x=>a.sqlVcoresPerInstance*x.three/36));
const ahbWindows=sum(a.regions.map(r=>a.paymentPerRegion*a.hours*(a.vm[r].windows-a.vm[r].payg)));
const ahbSql=Object.keys(a.sql).length*a.sqlVcoresPerInstance*a.hours*a.sqlLicensePerCoreHourAllowance;
const burstSaving=sum(a.regions.map((r,i)=>a.apiBurst[i]*(a.hours-a.burstHours)*a.vm[r].payg));
const discount1=basePayg-ri1+sqlPayg-sql1;
const discount3=basePayg-ri3+sqlPayg-sql3;
const recommended=total-discount1;
const withAhb=recommended-ahbWindows-ahbSql;
const migration=[
 ['Azure Migrate assessment and migration service',1,0,'No service fee assumed; temporary infrastructure below'],
 ['Database Migration Service service fee',1,0,'Confirm supported current migration path; replication infrastructure below'],
 ['Inbound initial data transfer',30000,0,'Azure ingress; WAN charges separately'],
 ['Initial replication to two other regions',60000,.08,'30 TB x two copies; allowance'],
 ['Delta replication during 30-day migration',6000,.08,'10% changes x two copies; allowance'],
 ['Temporary replication/test VMs D4s v5 East US',4*730,a.vm.eastus.payg,'Verified VM rate'],
 ['Temporary managed disks',4,20,'Allowance'],
 ['Staging Blob data',30000,.02,'One month; allowance'],
 ['Temporary VPN and source WAN allowance',1,500,'Source provider quote required'],
 ['Migration logging and validation tooling',1,250,'Allowance'],
 ['One month destination dual run',1,total,'Full PAYG destination; precedes steady-state Year 1'],
 ['Engineering and cutover labour',160,100,'Illustrative project labour; not Azure calculator pricing'],
 ['Security review and restore/cutover rehearsal',40,125,'Illustrative labour; not certification fee']
];
const migrationBase=sum(migration.map(x=>x[1]*x[2]));
const migrationBudget=migrationBase*1.15;
const scenarios=[['PAYG with scheduled scaling',total],['1-year reservations, licenses included',recommended],['1-year reservations + eligible Hybrid Benefit',withAhb],['3-year reservations, licenses included',total-discount3],['3-year reservations + eligible Hybrid Benefit',total-discount3-ahbWindows-ahbSql]];
const projection=[];
for(let year=1;year<=3;year++){
 const gross=sum(rows.map(x=>x.monthly*(1+x.growth)**(year-1)));
 // Reserve the growing stable footprint at constant rate; renew annual reservations.
 const reserved=gross-discount1*1.2**(year-1);
 const eligible=sum(rows.filter(x=>/Front Door client|query scans|Log Analytics/.test(x.name)).map(x=>x.monthly*(1+x.growth)**(year-1)));
 const improve=year===1?0:year===2?.1:.2;
 const optimized=reserved-eligible*improve;
 const annual=optimized*12;
 projection.push({year,paygMonthly:gross,reservedMonthly:reserved,additionalOptimization:eligible*improve,optimizedMonthly:optimized,annual,budget:annual*1.15+(year===1?migrationBudget:0)});
}
const table=(headers,rs)=>'| '+headers.join(' | ')+' |\n| '+headers.map(()=>'---').join(' | ')+' |\n'+rs.map(r=>'| '+r.join(' | ')+' |').join('\n')+'\n';
const write=(f,s)=>fs.writeFileSync(path.join(root,f),s);
write('cost-breakdown.md','# Detailed monthly cost model\n\nUSD, 730 hours/month. Verified means selected Azure Retail Prices API meter; allowance means a stated planning rate requiring calculator/quote validation.\n\n'+table(['Category / meter','Quantity','USD per unit','Unit','Evidence','Monthly USD'],rows.map(x=>[x.group+': '+x.name,x.quantity,x.rate,x.unit,x.status,money(x.monthly)]))+`\nOperations: **${money(op)}**. Management: **${money(mgmt)}**. Total: **${money(total)}/month**.\n`);
write('migration-breakdown.md','# One-time migration cost\n\n30-day migration with one full destination dual-run month, followed by the 36-month operating forecast. No reservation discounts assumed during migration.\n\n'+table(['Item','Quantity','USD rate','Extended cost','Basis'],migration.map(x=>[x[0],x[1],x[2],money(x[1]*x[2]),x[3]]))+`\nSubtotal: **${money(migrationBase)}**. 15% migration contingency: **${money(migrationBase*.15)}**. Migration budget: **${money(migrationBudget)}**.\n\nSource datacenter overlap, ISP contract changes, application refactoring, third-party license purchases, payment processor charges, external PCI assessment fees and tax are excluded. Add actual quotes before approval. The $21,000 labour provision is illustrative and separately identifiable.\n`);
write('comparison.md','# Cost optimization comparison\n\nAll scenarios retain API peak capacity for 146 hours/month, the full 30 web VMs, six payment VMs and equivalent database capacity. They exclude migration and tax.\n\n'+table(['Scenario','Monthly','Annual','Savings vs scaled PAYG/month'],scenarios.map(([s,n])=>[s,money(n),money(n*12),money(total-n)]))+`\n## Reservation calculation\n\n`+table(['Eligible compute','PAYG monthly','1-year monthly equivalent','3-year monthly equivalent'],[['56 steady application VMs (compute only)',money(basePayg),money(ri1),money(ri3)],['32 SQL MI base vCores',money(sqlPayg),money(sql1),money(sql3)]])+`\nReservation API retailPrice is the **total term price**, despite the meter's hour label. Divide one-year prices by 12 and three-year prices by 36; do not multiply them by 730. Monthly equivalents represent amortized cost, not a commitment to a particular payment schedule. Zone redundancy add-ons, licenses, disks, storage and networking remain separately billed in this model.\n\nOne-year compute savings: **${money(discount1)}/month**. Three-year compute savings: **${money(discount3)}/month**. Three-year modeled commitment principal: **${money((ri3+sql3)*36)}**, excluding all nonreserved charges. Annual commitment principal: **${money((ri1+sql1)*12)}**.\n\nConditional Windows Hybrid Benefit saving: **${money(ahbWindows)}/month** across six payment VMs. Conditional SQL Hybrid Benefit saving: **${money(ahbSql)}/month**, based on the explicitly assumed SQL license rate, not a verified quote. Eligible existing licenses and Software Assurance/subscription coverage must be inventoried. The default recommended budget does not assume eligibility.\n\nAPI autoscaling already saves **${money(burstSaving)}/month** against running all 40 API VMs for 730 hours. Do not subtract this again from the comparison. Scheduling two GPU VMs for 160 hours each saves **${money(2*(730-160)*a.gpu)}/month** versus always-on GPUs; this is also already reflected.\n\nRightsizing opportunity (not included): reducing API compute consumption by 25% saves approximately **${money(sum(rows.filter(x=>x.name.startsWith('API ')).map(x=>x.monthly))*.25)}/month** at PAYG rates if load tests support it. Do not apply that saving to already purchased reservations until commitments can be resized/reallocated or expire.\n`);
write('projection-tables.md','# Three-year growth model\n\nYears are successive 12-month periods after go-live, not assumed calendar years. Prices and USD exchange basis remain constant.\n\n'+table(['Year','PAYG/month','Reserved/month','Further efficiency/month','Optimized/month','Operating/year','Budget incl. 15% contingency + migration in Y1'],projection.map(x=>[x.year,money(x.paygMonthly),money(x.reservedMonthly),money(x.additionalOptimization),money(x.optimizedMonthly),money(x.annual),money(x.budget)]))+`\nThree-year operating forecast: **${money(sum(projection.map(x=>x.annual)))}**. Three-year funding envelope including operating contingency and migration budget: **${money(sum(projection.map(x=>x.budget)))}**. Contingency is a funding reserve, not expected Azure consumption.\n\n`+table(['Annual demand-growth sensitivity','Year 3 monthly using uniform growth','Method'],[.1,.2,.35].map(g=>[(100*g)+'%',money(recommended*(1+g)**2),'Year 1 recommended x (1 + g)^2; no extra efficiency']))+`\nThe sensitivity table is a separate uniform-growth stress test. The main forecast uses meter-specific growth and is not expected to equal the 20% sensitivity case.\n`);
const summary={operations:op,management:mgmt,paygMonthly:total,recommendedMonthly:recommended,conditionalAhbMonthly:withAhb,migrationSubtotal:migrationBase,migrationBudget,discount1,discount3,projection};
write('results.json',JSON.stringify({summary,rows,migration,scenarios},null,2));
console.log(JSON.stringify(summary,null,2));
