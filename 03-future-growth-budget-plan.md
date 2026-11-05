# 3. Future growth and budget plan

## Three-year forecast

The forecast starts after migration. The recommended case renews one-year reservations for steady VM and SQL compute; licensing remains included. Hybrid Benefit is an optional upside rather than a budget dependency. USD list prices remain constant, with no assumed future vendor price cuts.

| Period | Optimized monthly average | Annual operations + management | Funding including 15% contingency and migration in Year 1 |
| --- | ---: | ---: | ---: |
| Year 1 | $55,096.93 | $661,163.17 | $861,668.16 |
| Year 2 | $66,437.91 | $797,254.95 | $916,843.19 |
| Year 3 | $80,204.98 | $962,459.76 | $1,106,828.72 |

Expected three-year operations and management total **$2,420,877.87**. The funding envelope including operating contingencies and migration is **$2,885,340.07**. Contingency is unspent reserve until required. [Detailed projections and growth sensitivity](projection-tables.md)

## Forecast method

For each line: `year_n_cost = year_1_cost × (1 + annual_growth)^(n−1)`. Subtract reservation savings scaled with the 20% growth of eligible stable compute. Then apply the targeted efficiencies below. This is a demand-based financial forecast, not a deployment specification with fractional machines.

| Driver | Annual growth assumption |
| --- | ---: |
| Web/API/payment compute, SQL base and zone compute, licensing, disks and VM protection | 20% |
| Client traffic, requests, Cosmos throughput, scans, ML/batch, application/security logs | 25% |
| Database/lake/backup storage, changed-data transfer and retained log archive | 30% |
| Load balancer fixed fees, firewalls, private networking and support | 10% |
| Front Door base profile | 0% |

Further efficiency applies only to client delivery bytes, Synapse scan bytes and application Log Analytics ingestion: 0% in Year 1, 10% in Year 2 and 20% in Year 3, each relative to that year's unoptimized growth. These save **$1,582/month in Year 2** and **$3,955/month in Year 3** beyond reservations. Security ingestion is excluded. These are targets that must be measured, not guaranteed product discounts.

All capacity is actually purchased in supported increments. SQL instance cores, storage limits, regional quota and failover capacity must be recalculated at each approval; averaging cost by 20% does not imply provisioning 19.2 cores. The 5,120 GB SQL budget grows to 6,656 GB in Year 2 and 8,652.8 GB in Year 3, triggering a service-tier/storage-limit review well before Year 3. Sharding, a different SQL tier or a larger supported configuration may create step costs exceeding this smooth forecast. Use the reserve for approved changes and revise the baseline when measured requirements are known.

## Roadmap and budget controls

**Before migration:** inventory dependencies and licenses, measure traffic and SQL/NoSQL usage, prove source compatibility, confirm regional service availability and quotas, and benchmark recovery. Reconcile allowance rates with a complete provider calculator export. Confirm data-location requirements before copying customer data across continents.

**Year 1:** migrate in waves: landing zone and security, noncritical web/API, analytics, then inventory/payment and SQL cutover. Use consistency checks, rollback criteria and a rehearsed write freeze. Gather at least 30 days of representative utilization before reservation purchase. Track the reservation ramp separately if the first operating month remains PAYG; one extra PAYG month adds about $4,745.93 versus the forecast.

**Year 2:** implement the 10% delivery/scan/application-log efficiency targets, archive cold analytics data and benchmark newer instances before renewal. Raise SQL capacity decisions at 70% of validated storage or performance limits. Increase throughput or capacity when sustained latency or queue-depth objectives are breached; budget thresholds must not force service outages.

**Year 3:** target 20% efficiencies relative to demand growth; decide whether stable compute justifies three-year commitments. Revisit dedicated versus serverless warehouse compute using measured scan volume and concurrency. Fund the SQL capacity step before reaching limits and test cross-region recovery again after every architectural change.

The monthly funding ceiling is the relevant annual operating estimate divided by 12 and multiplied by 1.15, not a hard spending stop. Investigate forecast spend above 90% of that ceiling; require a revised demand forecast and costed action at 100%. Track cost per completed order, model training run and TB queried to distinguish useful growth from waste.

## Sensitivity

If all demand instead grew uniformly at 10%, 20% or 35%, Year 3 monthly cost would be approximately $66,667.29, $79,339.58 or $100,414.16 before additional efficiency. The main projection uses different rates by meter and therefore differs from these stress cases. A 10% price rise increases affected noncommitted charges; reservations may protect their covered infrastructure for the remaining term, but not every charge. Reforecast quarterly and before a major campaign.
