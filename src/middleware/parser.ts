import * as xml2js from 'xml2js'


export async function xmlParser (xml:string) {
  console.log(xml)
    return new Promise((resolve, reject) => {
      xml2js.parseString(xml, (err, result) => {
        if (err) {
          console.error('Error parseing xml:', err)
          reject('Error parsing XML')
        } else {
          resolve(result)
        }
      })
    })
}
 
