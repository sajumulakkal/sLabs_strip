var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
var Schema = mongoose.Schema;
var fs = require('fs');
var ProductSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category'},
  name: String,
  price: Number,
  image: String
});
/*
ProductSchema.plugin(mongoosastic, {
host: "sajumulakkal-elastic-search.es.us-east4.gcp.elastic-cloud.com",
  port: 9243,
  protocol: "https",
  auth: "elastic: ",
  //curlDebug: true,
  //use_ssl: false
  //ssl: {
	//   ca: ["a_key","11a_key321"]
          // Load the CA pem as well as the intermediate root pem
          //ca: [fs.readFileSync('./ca.pem'), fs.readFileSync('./intermediateRoot.pem')],

          // This ensures that certificates that are not signed by the 'ca' above get rejected
          //rejectUnauthorized: true
   // }
   ssl: {
   ca: fs.readFileSync('./elastic-ece-ca-cert.pem'),
   rejectUnauthorized: true
	}
});*/

ProductSchema.plugin(mongoosastic, {
  hosts: [
   //'https://elastic:UUU@sajumulakkal-elastic-search.es.us-east4.gcp.elastic-cloud.com:9243'
   'http://34.125.10.220:9200'
  ]
});

module.exports = mongoose.model('Product', ProductSchema);
