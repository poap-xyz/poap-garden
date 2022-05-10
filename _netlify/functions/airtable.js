const Airtable = require('airtable');
const {AIRTABLE_KEY} = process.env;
const {AIRTABLE_BASE} = process.env;
var base = new Airtable({apiKey: AIRTABLE_KEY}).base(AIRTABLE_BASE);
import fetch from "node-fetch";


exports.handler = async (event, context) => {
  let email = event.queryStringParameters.email;
  let name = event.queryStringParameters.name;
  let description = event.queryStringParameters.description;

  console.log({
    "data": {
      "email": email,
      "name": name,
      "description": description
    }
  });

  try {
    let fields = {
      "fld6ixBMNtp8TFagN": email,
      "fld0wZdTQLSQEMT1s": name,
      "fldIubRLChJ2pbtfa": "no",
      "fldCmzc7YeGQrUTLF": description
    };
    base("POAP Garden Submissions").create(fields, function(err, record) {
      console.log(record.getId());
      return {
        statusCode: 200,
        body: JSON.stringify( record.getId() )
      };
    });
  }
  catch(err) {
    console.log(err.message);
    return {
      statusCode: 500,
      body: err.message
    };
  }
}

