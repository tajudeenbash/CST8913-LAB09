# 2. Cost optimization strategy

## Recommended purchase strategy

Start on PAYG during migration and the utilization observation period. After load and failover tests, reserve the stable compute: 30 web VMs, 20 baseline API VMs, six payment VMs and 32 SQL MI base vCores. Keep API burst capacity, GPU training and batch workers on consumption pricing. One-year reservations reduce the modeled monthly bill from **$59,842.86 to $55,096.93**, saving **$4,745.93/month** or **$56,951.13/year**.

Three-year reservations reduce it to **$52,356.99/month** before Hybrid Benefit, but commit capacity while the migration architecture is still evolving. Use the one-year case as the initial budget and reconsider longer terms after six months of stable usage. The [comparison appendix](comparison.md) shows term principal, effective monthly costs and the separately priced license components. Reservations discount eligible infrastructure rather than the entire bill. [Azure reservation pricing](https://azure.microsoft.com/en-us/pricing/offers/reservations)

## Actions, savings and constraints

| Action | Quantified opportunity | Decision rule |
| --- | --- | --- |
| Reserve steady VM and SQL base compute for one year | $4,745.93/month | Reserve only measured baseline; inspect utilization and coverage monthly |
| Retain modeled API scaling schedule | $2,543.90/month versus all 40 API VMs always running | Already in the baseline; use queue depth, latency and CPU signals with cooldowns |
| Deallocate GPU VMs outside 160 hours/month each | $599.64/month versus always-on GPUs | Already in baseline; persist checkpoints, stop/deallocate after jobs |
| Eligible Windows + SQL Hybrid Benefit | Up to modeled $3,141.92/month beyond reservations | Conditional on license inventory; SQL portion uses a planning license rate |
| Reduce API CPU footprint 25% | About $953.96/month at PAYG | Candidate only; load-test p95 latency, memory and failure headroom first |
| Improve CDN efficiency | Target 10% delivered-byte reduction in Year 2; 20% in Year 3 vs unoptimized demand | Compress assets, modern image formats, avoid unnecessary payloads; cache hits reduce origin traffic, not automatically client bytes |
| Partition and compress lake data | Target 10%/20% lower scan bytes in Years 2/3 | Verify query plans and billed bytes; no claim that serverless is universally cheaper |
| Filter application diagnostics | Target 10%/20% lower application log ingestion in Years 2/3 | Preserve required security/audit records; security logs excluded from this saving |

Hybrid Benefit covers qualifying licenses; it is not a blanket percentage discount and must not be added twice. Windows licensing savings are based on the observed Windows-minus-Linux rate difference. SQL MI licensing can be covered separately from reserved infrastructure. No passive-secondary free-license entitlement is assumed. Existing Software Assurance/subscription costs remain outside this cloud bill and must be considered in total cost of ownership. [SQL Hybrid Benefit](https://learn.microsoft.com/en-us/azure/azure-sql/azure-hybrid-benefit), [SQL reservation treatment](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/understand-reservation-charges-sql-managed-instance)

## Service adjustments

Cosmos storage is a substantial recurring charge because the full 10 TB is replicated three times. Reassess whether historical analytics documents need online transactional access. Export cold history to ADLS and apply retention policies only after business approval. At the observed $0.25/GB-month, removing 1 TB from all three online copies saves $750/month in Cosmos storage, before added lake costs. Never remove recovery copies or required records merely to meet a budget.

The baseline uses provisioned Cosmos RU/s, with storage-driven minimum throughput considered; it does not assume tiny autoscale floors for a 10 TB database. Benchmark partition keys and request units before switching to autoscale. A different region count or multiple-write configuration changes the price. [Cosmos throughput limits](https://learn.microsoft.com/en-us/azure/cosmos-db/concepts-limits)

Use interruptible/Spot capacity only for checkpointed, retryable ML and batch jobs. Its rate and availability vary, so no speculative Spot saving is booked. Benchmark newer VM families and ARM-compatible services at renewal. Evaluate containers or event-driven serverless services when measured concurrency and cold-start tolerances support them; include migration effort, networking and operational complexity in the comparison.

Avoid stopping payment, web minimum capacity, database failover capacity or security tooling to save money. Auto-shutdown must deallocate VMs; stopping a guest OS alone can leave billable compute allocated. Disk and storage costs continue.

## Cost governance

Require `Application`, `Environment`, `Region`, `Owner`, `CostCenter`, `DataClassification` and `ExpiryDate` tags. Map shared Front Door, monitoring and networking charges to teams using documented traffic or resource allocation shares. Use Azure Policy to identify missing tags and unauthorized SKUs. Review unallocated spend weekly.

Configure actual and forecast budget alerts at 50%, 80% and 100%; assign an owner and response deadline. Budget alerts are notifications, not automatic spend caps. Review reservation coverage, idle resources, log ingestion, egress and cost per 1,000 orders monthly. Schedule nonproduction expiration and anomaly reviews. Platform/security owners approve any change that affects availability or evidence retention.
