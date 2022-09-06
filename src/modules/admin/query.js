
const GETLOGIN = `
select a.* from admins as a
where a.adminname = $1 and password = crypt($2,a.password)
`

const GETREGISTER = `
insert into admins(adminname,password,status) values ($1,$2,$3) returning *
`