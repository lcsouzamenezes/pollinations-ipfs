import Debug from "debug"
import { useEffect, useMemo } from "react"
import { getWriter } from  "../ipfsWebClient.js"


const debug = Debug("useIPFSWrite")

export default (cid) => {

    const writer = useMemo(() => {
        const writer = getWriter(cid)
        return writer
    }, [cid])

    // call writer.close() when the component is unmounted
    useEffect(() => {
         return () => {   writer.close() }                     
    }, [writer]) 

    return writer
}