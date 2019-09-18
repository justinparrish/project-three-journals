const userApi = require('./user')

    userApi.getUser().then((all) =>{
        console.log('ALL USERS')
        console.log(all)
    })

    userApi.addUser({username: 'dskjsd', pin:'4343'}).then((add) => {
        console.log('Added')
        console.log(add)
    })