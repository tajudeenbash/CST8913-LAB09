# One-time migration cost

30-day migration with one full destination dual-run month, followed by the 36-month operating forecast. No reservation discounts assumed during migration.

| Item | Quantity | USD rate | Extended cost | Basis |
| --- | --- | --- | --- | --- |
| Azure Migrate assessment and migration service | 1 | 0 | $0.00 | No service fee assumed; temporary infrastructure below |
| Database Migration Service service fee | 1 | 0 | $0.00 | Confirm supported current migration path; replication infrastructure below |
| Inbound initial data transfer | 30000 | 0 | $0.00 | Azure ingress; WAN charges separately |
| Initial replication to two other regions | 60000 | 0.08 | $4,800.00 | 30 TB x two copies; allowance |
| Delta replication during 30-day migration | 6000 | 0.08 | $480.00 | 10% changes x two copies; allowance |
| Temporary replication/test VMs D4s v5 East US | 2920 | 0.192 | $560.64 | Verified VM rate |
| Temporary managed disks | 4 | 20 | $80.00 | Allowance |
| Staging Blob data | 30000 | 0.02 | $600.00 | One month; allowance |
| Temporary VPN and source WAN allowance | 1 | 500 | $500.00 | Source provider quote required |
| Migration logging and validation tooling | 1 | 250 | $250.00 | Allowance |
| One month destination dual run | 1 | 59842.857679999994 | $59,842.86 | Full PAYG destination; precedes steady-state Year 1 |
| Engineering and cutover labour | 160 | 100 | $16,000.00 | Illustrative project labour; not Azure calculator pricing |
| Security review and restore/cutover rehearsal | 40 | 125 | $5,000.00 | Illustrative labour; not certification fee |

Subtotal: **$88,113.50**. 15% migration contingency: **$13,217.02**. Migration budget: **$101,330.52**.

Source datacenter overlap, ISP contract changes, application refactoring, third-party license purchases, payment processor charges, external PCI assessment fees and tax are excluded. Add actual quotes before approval. The $21,000 labour provision is illustrative and separately identifiable.
