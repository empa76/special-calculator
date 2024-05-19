const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = 3000

var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/api/v1/document', cors(corsOptions), (req, res) => {
  const encodecDocument = {
  body: `PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICA8aGVhZD4KICAgIDxtZXRhIG\
        NoYXJzZXQ9IlVURi04IiAvPgogICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZ\
        HRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiIC8+CiAgICA8dGl0bGU+TGVk\
        Z2VyPC90aXRsZT4KICA8L2hlYWQ+CiAgPGJvZHk+CiAgICA8aDI+QTwvaDI+CiAgICA8dGFib\
        GU+CiAgICAgIDx0aGVhZD4KICAgICAgICA8dHI+CiAgICAgICAgICA8dGg+SXRlbTwvdGg+Ci\
        AgICAgICAgICA8dGg+UHJpY2U8L3RoPgogICAgICAgIDwvdHI+CiAgICAgIDwvdGhlYWQ+Ci\
        AgICAgIDx0Ym9keT4KICAgICAgICA8dHI+CiAgICAgICAgICA8dGQ+MTwvdGQ+CiAgICAgICA\
        gICA8dGQ+MTAuMjA8L3RkPgogICAgICAgIDwvdHI+CiAgICAgICAgPHRyPgogICAgICAgICAg\
        PHRkPjI8L3RkPgogICAgICAgICAgPHRkPjEyLjAwPC90ZD4KICAgICAgICA8L3RyPgogICAgIC\
        AgIDx0cj4KICAgICAgICAgIDx0ZD4zPC90ZD4KICAgICAgICAgIDx0ZD4zNy4xMDwvdGQ+CiA\
        gICAgICAgPC90cj4KICAgICAgPC90Ym9keT4KICAgIDwvdGFibGU+CgogICAgPGgyPkI8L2gy\
        PgogICAgPHRhYmxlPgogICAgICA8dGhlYWQ+CiAgICAgICAgPHRyPgogICAgICAgICAgPHRo\
        Pkl0ZW08L3RoPgogICAgICAgICAgPHRoPlByaWNlPC90aD4KICAgICAgICA8L3RyPgogICAgI\
        CA8L3RoZWFkPgogICAgICA8dGJvZHk+CiAgICAgICAgPHRyPgogICAgICAgICAgPHRkPjE8L3\
        RkPgogICAgICAgICAgPHRkPjQ1LjAwPC90ZD4KICAgICAgICA8L3RyPgogICAgICAgIDx0cj4KI\
        CAgICAgICAgIDx0ZD4yPC90ZD4KICAgICAgICAgIDx0ZD4zMDAuMTg8L3RkPgogICAgICAgID\
        wvdHI+CiAgICAgICAgPHRyPgogICAgICAgICAgPHRkPjM8L3RkPgogICAgICAgICAgPHRkPjU\
        0LjA3PC90ZD4KICAgICAgICA8L3RyPgogICAgICA8L3Rib2R5PgogICAgPC90YWJsZT4KICA8L\
        2JvZHk+CjwvaHRtbD4K` }

  res.send(encodecDocument)
})

app.listen(port, () => {
  console.log('Welcome to Ledger Calculator API server')
  console.log('----------------------------------------')
  console.log('Ledger Calculator API server started')
  console.log(`CORS-enabled web server listening on port ${port}`)
})
