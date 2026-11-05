# Source register

Retrieved/reviewed November 5, 2026. Official sources support service behavior; a service pricing link alone does not verify a numeric allowance. Rate records are retained with meter IDs in `evidence/azure-retail-selected.json`.

| Source | Purpose |
| --- | --- |
| [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/) | Saved East US compute cross-check |
| [Azure Retail Prices API documentation](https://learn.microsoft.com/en-us/rest/api/cost-management/retail-prices/azure-retail-prices) | Reproducible retail meter lookup; reservation term handling |
| [SQL MI pricing](https://azure.microsoft.com/en-us/pricing/details/azure-sql-managed-instance/single/) | SQL compute/storage/license pricing structure |
| [SQL MI reservation charges](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/understand-reservation-charges-sql-managed-instance) | Separate infrastructure discount and licensing |
| [Azure Hybrid Benefit for SQL](https://learn.microsoft.com/en-us/azure/azure-sql/azure-hybrid-benefit) | Conditional license eligibility |
| [Azure Reservations](https://azure.microsoft.com/en-us/pricing/offers/reservations) | Commitment structure and OS licenses |
| [SQL MI failover groups](https://learn.microsoft.com/en-us/azure/azure-sql/managed-instance/failover-group-sql-mi) | Cross-region primary/secondary topology |
| [Cosmos DB pricing](https://azure.microsoft.com/en-us/pricing/details/cosmos-db/standard-provisioned/) | Provisioned throughput and regional storage |
| [Cosmos limits](https://learn.microsoft.com/en-us/azure/cosmos-db/concepts-limits) | Storage-driven throughput floor |
| [Storage redundancy](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy) | Paired-region GRS/GZRS behavior |
| [Blob reliability](https://learn.microsoft.com/en-us/azure/reliability/reliability-storage-blob) | Cross-region replication behavior |
| [Front Door billing](https://learn.microsoft.com/en-us/azure/frontdoor/billing) | Base, requests, origin and client transfer meters |
| [Synapse pricing](https://azure.microsoft.com/en-us/pricing/details/synapse-analytics/) | Serverless scanned-data pricing versus dedicated capacity |
| [Azure Monitor pricing](https://azure.microsoft.com/en-us/pricing/details/monitor/) | Ingestion, retention, query and alert costs |
| [Database Migration Service pricing](https://azure.microsoft.com/en-gb/pricing/details/database-migration/) | Free service options; verify current supported migration path |
| [PCI DSS on Azure](https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-pci-dss) | Shared compliance scope and assessment evidence |

API filters used: `serviceName eq 'Virtual Machines'` with `armSkuName` D4s_v5 or NC4as_T4_v3, and `armRegionName` eastus/westeurope/southeastasia; SQL Managed Instance and Azure Cosmos DB queried separately per region. Selected rates exclude Spot, low-priority and Dev/Test meters. Currency is USD. Reservation prices are term totals. The raw selected records allow the reader to inspect effectiveStartDate independently of the retrieval date.
