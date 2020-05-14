import {Platform} from "../../Platform";

/**
 * Get identies from the platform
 * 
 * @param {Platform} this - bound instance class
 * @param {string} id - id of an identity
 * @returns identites (or `null` if non-existent)
 * 
 * ^^^ From existing DashJS comment
 * ---------------------
 * 
 * ---------------------
 * **Embedded TypeDoc Sample Code**: 
 * ```javascript
 * await client.platform.identities.get('3GegupTgRfdN9JMS8R6QXF3B2VbZtiw63eyudh1oMJAk')
 * ```
 * ---------------------
 * **`include` TypeDoc Example (get.md)**:
 * 
 * [[include:platform/identities/get.md]]
 */
export async function get(this: Platform, id: string): Promise<any> {
    // @ts-ignore
    const identityBuffer = await this.client.getIdentity(id);
    if(identityBuffer===null){
        return null;
    }
    return this.dpp.identity.createFromSerialized(identityBuffer);
}

export default get;
