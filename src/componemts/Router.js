import { Button } from "@chakra-ui/react";
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Create from "./Create";
import GitCreate from "./GitCreate";

function Router1() {
  return (
<>
<Routes>
<Route path="/GitCreate" element={<GitCreate/>}></Route>
<Route path="/Create" element={<Create/>}></Route>
</Routes>
</>
  )
}

export default Router1