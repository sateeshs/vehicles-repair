import { NextPage } from "next"


type BaseNextPage<type> = NextPage<type> & { auth: boolean}
export type {BaseNextPage}