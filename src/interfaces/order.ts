export type Order = {
    key: string,
    vin: string;
    location?: Location,
    status: string,
    description?: string,
    createdDate?: string
}

/**
 * Sub State In-Maintenance:
-Estimating
-Awaiting Approval
-Awaiting Repair
-Repair In Progress
-On Hold
-Final Inspections
-Repair Complete (here)
-Awaiting Customer Pickup
-Done
 */