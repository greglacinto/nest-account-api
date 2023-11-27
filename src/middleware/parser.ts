import * as xml2js from 'xml2js'


export async function xmlParser (xml:string) {
    return new Promise((resolve, reject) => {
      xml2js.parseString(xml, (err: any, result: any) => {
        if (err) {
          console.error('Error parseing xml:', err)
          reject('Error parsing XML')
        } else {
          resolve(result)
        }
      })
    })
}
 
