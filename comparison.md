# Cost optimization comparison

All scenarios retain API peak capacity for 146 hours/month, the full 30 web VMs, six payment VMs and equivalent database capacity. They exclude migration and tax.

| Scenario | Monthly | Annual | Savings vs scaled PAYG/month |
| --- | --- | --- | --- |
| PAYG with scheduled scaling | $59,842.86 | $718,114.29 | $0.00 |
| 1-year reservations, licenses included | $55,096.93 | $661,163.17 | $4,745.93 |
| 1-year reservations + eligible Hybrid Benefit | $51,955.01 | $623,460.13 | $7,887.85 |
| 3-year reservations, licenses included | $52,356.99 | $628,283.83 | $7,485.87 |
| 3-year reservations + eligible Hybrid Benefit | $49,215.07 | $590,580.79 | $10,627.79 |

## Reservation calculation

| Eligible compute | PAYG monthly | 1-year monthly equivalent | 3-year monthly equivalent |
| --- | --- | --- | --- |
| 56 steady application VMs (compute only) | $8,979.00 | $5,540.00 | $3,546.72 |
| 32 SQL MI base vCores | $3,733.59 | $2,426.67 | $1,680.00 |

Reservation API retailPrice is the **total term price**, despite the meter's hour label. Divide one-year prices by 12 and three-year prices by 36; do not multiply them by 730. Monthly equivalents represent amortized cost, not a commitment to a particular payment schedule. Zone redundancy add-ons, licenses, disks, storage and networking remain separately billed in this model.

One-year compute savings: **$4,745.93/month**. Three-year compute savings: **$7,485.87/month**. Three-year modeled commitment principal: **$188,162.00**, excluding all nonreserved charges. Annual commitment principal: **$95,600.00**.

Conditional Windows Hybrid Benefit saving: **$805.92/month** across six payment VMs. Conditional SQL Hybrid Benefit saving: **$2,336.00/month**, based on the explicitly assumed SQL license rate, not a verified quote. Eligible existing licenses and Software Assurance/subscription coverage must be inventoried. The default recommended budget does not assume eligibility.

API autoscaling already saves **$2,543.90/month** against running all 40 API VMs for 730 hours. Do not subtract this again from the comparison. Scheduling two GPU VMs for 160 hours each saves **$599.64/month** versus always-on GPUs; this is also already reflected.

Rightsizing opportunity (not included): reducing API compute consumption by 25% saves approximately **$953.96/month** at PAYG rates if load tests support it. Do not apply that saving to already purchased reservations until commitments can be resized/reallocated or expire.
