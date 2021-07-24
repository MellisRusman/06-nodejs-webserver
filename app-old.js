const http = require('http');

http.createServer( (request, response) =>{

    response.setHeader('Content-Disposition', 'attachment;filename=excel.csv')

    response.writeHead(200, {'Content-Type': 'application/csv'})
    console.log(request)


    response.write('id, name\n')
    response.write('1, lucas\n')
    response.write('2, facu\n')
    response.write('3, pacho\n')
    response.write('4, cris\n')



    // const persona = {
    //     id: 1,
    //     name: 'Lucas y pacho'
    // }




    //response.write(JSON.stringify(persona))
    response.end()
})
.listen(8080);
console.log("LLamando al servidor", 8080);