# Detailed monthly cost model

USD, 730 hours/month. Verified means selected Azure Retail Prices API meter; allowance means a stated planning rate requiring calculator/quote validation.

| Category / meter | Quantity | USD per unit | Unit | Evidence | Monthly USD |
| --- | --- | --- | --- | --- | --- |
| Operations: Web Linux D4s v5 — eastus | 7300 | 0.192 | VM-hour | Verified | $1,401.60 |
| Operations: API Linux D4s v5 baseline — eastus | 5840 | 0.192 | VM-hour | Verified | $1,121.28 |
| Operations: API Linux D4s v5 burst — eastus | 1168 | 0.192 | VM-hour | Verified | $224.26 |
| Operations: Payment Windows D4s v5 — eastus | 1460 | 0.376 | VM-hour | Verified | $548.96 |
| Operations: Cosmos DB provisioned throughput — eastus | 146000 | 0.008 | 100 RU/s-hour | Verified | $1,168.00 |
| Operations: Cosmos DB logical data copy — eastus | 10000 | 0.25 | GB-month | Verified | $2,500.00 |
| Operations: Backup object storage copy — eastus | 40000 | 0.02 | GB-month | Allowance | $800.00 |
| Operations: Web Linux D4s v5 — westeurope | 7300 | 0.23 | VM-hour | Verified | $1,679.00 |
| Operations: API Linux D4s v5 baseline — westeurope | 4380 | 0.23 | VM-hour | Verified | $1,007.40 |
| Operations: API Linux D4s v5 burst — westeurope | 876 | 0.23 | VM-hour | Verified | $201.48 |
| Operations: Payment Windows D4s v5 — westeurope | 1460 | 0.414 | VM-hour | Verified | $604.44 |
| Operations: Cosmos DB provisioned throughput — westeurope | 146000 | 0.008 | 100 RU/s-hour | Verified | $1,168.00 |
| Operations: Cosmos DB logical data copy — westeurope | 10000 | 0.25 | GB-month | Verified | $2,500.00 |
| Operations: Backup object storage copy — westeurope | 40000 | 0.02 | GB-month | Allowance | $800.00 |
| Operations: Web Linux D4s v5 — southeastasia | 7300 | 0.24 | VM-hour | Verified | $1,752.00 |
| Operations: API Linux D4s v5 baseline — southeastasia | 4380 | 0.24 | VM-hour | Verified | $1,051.20 |
| Operations: API Linux D4s v5 burst — southeastasia | 876 | 0.24 | VM-hour | Verified | $210.24 |
| Operations: Payment Windows D4s v5 — southeastasia | 1460 | 0.424 | VM-hour | Verified | $619.04 |
| Operations: Cosmos DB provisioned throughput — southeastasia | 146000 | 0.008 | 100 RU/s-hour | Verified | $1,168.00 |
| Operations: Cosmos DB logical data copy — southeastasia | 10000 | 0.25 | GB-month | Verified | $2,500.00 |
| Operations: Backup object storage copy — southeastasia | 40000 | 0.02 | GB-month | Allowance | $800.00 |
| Operations: SQL MI GP Gen5 base compute — eastus | 11680 | 0.152218 | vCore-hour | Verified | $1,777.91 |
| Operations: SQL MI zone redundancy compute — eastus | 730 | 1.461296 | 16-vCore instance-hour | Verified | $1,066.75 |
| Operations: SQL MI zone redundant storage — eastus | 5120 | 0.23 | GB-month | Verified | $1,177.60 |
| Operations: SQL licensing — eastus | 11680 | 0.1 | vCore-hour | Allowance | $1,168.00 |
| Operations: SQL MI GP Gen5 base compute — westeurope | 11680 | 0.167439 | vCore-hour | Verified | $1,955.69 |
| Operations: SQL MI zone redundancy compute — westeurope | 730 | 1.607408 | 16-vCore instance-hour | Verified | $1,173.41 |
| Operations: SQL MI zone redundant storage — westeurope | 5120 | 0.2737 | GB-month | Verified | $1,401.34 |
| Operations: SQL licensing — westeurope | 11680 | 0.1 | vCore-hour | Allowance | $1,168.00 |
| Operations: Premium managed OS disks (including burst disks) | 76 | 20 | disk-month | Allowance | $1,520.00 |
| Operations: Regional load balancer fixed charge | 2190 | 0.025 | LB-hour | Allowance | $54.75 |
| Operations: Regional load balancer data processing | 20000 | 0.005 | GB | Allowance | $100.00 |
| Operations: Front Door Premium base (WAF included) | 1 | 330 | profile-month | Allowance | $330.00 |
| Operations: Front Door client delivery blended geography/tier | 100000 | 0.1 | GB | Allowance | $10,000.00 |
| Operations: Front Door requests | 10000 | 0.015 | 10,000 requests | Allowance | $150.00 |
| Operations: Front Door origin traffic allowance | 20000 | 0.02 | GB | Allowance | $400.00 |
| Operations: Cross-region replication: 2 destinations | 10000 | 0.08 | GB transferred | Allowance | $800.00 |
| Operations: Direct outbound traffic excluding Front Door | 2000 | 0.1 | GB | Allowance | $200.00 |
| Operations: Regional firewalls fixed and processing allowance | 3 | 1000 | region-month | Allowance | $3,000.00 |
| Operations: Private endpoints, DNS and peering allowance | 3 | 100 | region-month | Allowance | $300.00 |
| Operations: Warehouse ADLS logical data (ZRS allowance) | 15000 | 0.023 | GB-month | Allowance | $345.00 |
| Operations: Synapse serverless query scans | 200 | 5 | TB scanned | Allowance | $1,000.00 |
| Operations: ML NC4as T4 v3 East US | 320 | 0.526 | GPU VM-hour | Verified | $168.32 |
| Operations: Azure Batch Linux D4s v5 East US | 600 | 0.192 | VM-hour | Verified | $115.20 |
| Operations: Data pipelines orchestration allowance | 1 | 150 | month | Allowance | $150.00 |
| Operations: Backup protection fee allowance | 56 | 10 | protected VM-month | Allowance | $560.00 |
| Operations: Backup restore tests, transactions and version overhead | 1 | 300 | month | Allowance | $300.00 |
| Operations: SQL native backup storage above included entitlement | 10000 | 0.1 | GB-month | Allowance | $1,000.00 |
| Management: Application/platform Log Analytics ingestion | 600 | 2.76 | GB | Allowance | $1,656.00 |
| Management: Sentinel security logs combined ingestion allowance | 150 | 5 | GB | Allowance | $750.00 |
| Management: Long-term log archive/retention | 1000 | 0.03 | GB-month | Allowance | $30.00 |
| Management: Alerts, metrics and synthetic monitoring | 1 | 150 | month | Allowance | $150.00 |
| Management: Defender for Servers effective instance-months | 60 | 15 | VM-month | Allowance | $900.00 |
| Management: Defender for SQL, storage and Key Vault allowance | 1 | 150 | month | Allowance | $150.00 |
| Management: Azure support allowance | 1 | 1000 | month | Allowance | $1,000.00 |
| Management: Native Cost Management, budgets, tags and Advisor | 1 | 0 | month | No incremental fee assumed | $0.00 |

Operations: **$55,206.86**. Management: **$4,636.00**. Total: **$59,842.86/month**.
