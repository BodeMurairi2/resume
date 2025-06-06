#!/usr/bin/node

var json_response
const URL = "https://api.tvmaze.com/search/shows?q=breaking"
let promised_response = fetch(URL).then(function(resolved_response){
    return resolved_response.json()
}).then(function(resolved_data){
    json_response = resolved_data
    console.log(json_response)
})


