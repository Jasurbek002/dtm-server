

const GETSELECT  = `
select * from science as s
 left JOIN universty as u on s.univer_id = u.univer_id
 where s.sciencename = $1 or  s.sciencename = $2;
`
const POSTSELECT = `
insert into universty(univername,region)
values ($1,$2) returning *
`

const PUTSELECT = `
UPDATE universty SET univername = $1, region = $2 
where univer_id = $3
`


module.exports = {
    GETSELECT , POSTSELECT, PUTSELECT
}