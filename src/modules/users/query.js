

const GETLOGIN = `
select u.* from users as u where username = $1 and password = crypt($2,u.password)
`


const GETREGISTER = `
insert into users(username,password,contact,gender) 
values ($1,crypt($2,gen_salt('bf')),$3,$4) returning *
`

module.exports ={
    GETLOGIN,
    GETREGISTER
}