import { Order } from '@/interfaces/order';
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    /**  const data = await res.json()
 
  return NextResponse.json(data) */
  const orders = new Array<Order>();
  orders.push({key: "order-1",vin:"1JJV51007DUMMY125", status:"Estimating", });
  orders.push({key: "order-2",vin:"1FUJA1000DUMMY124", status:"Estimating"});
  orders.push({key: "order-3",vin:"1FUJBBCG03LK76872", status:"Estimating", });
  orders.push({key: "order-4",vin:"3H3J061S5LT409063", status:"Estimating"});
  orders.push({key: "order-5",vin:"3H3J061SXLT409172", status:"Estimating", });
  orders.push({key: "order-6",vin:"10BAAB238KF0D6292", status:"Estimating"});
  orders.push({key: "order-7",vin:"1FUJA6CK06LV93201", status:"Estimating", });
  orders.push({key: "order-8",vin:"3AKJGLDR3DSFF8709", status:"Estimating"});
  orders.push({key: "order-9",vin:"3AKJGLDR1DSFF8739", status:"Estimating", });
  orders.push({key: "order-10",vin:"1FVHCYFE1JHJP0452", status:"Estimating"});
  orders.push({key: "order-11",vin:"1GRAA0629AB703845", status:"Estimating", });
  orders.push({key: "order-12",vin:"1JJD061X7KL127904", status:"Estimating"});
  return NextResponse.json(orders)
}
export async function POST(request: Request) {}
export async function DELETE(request: Request) {}

// export {
    
// }


/*
Sub State In-Maintenance:
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