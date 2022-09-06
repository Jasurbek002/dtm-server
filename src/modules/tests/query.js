

const GETSELECT = `
select * from tests as t
 left JOIN answers as a on a.test_id = t.test_id
 where t.science_id = $1;
`
const POSTSELECT =`
insert into tests(title,science_id) values ($1,$2) returning *
`

const PUTSELECT = `
UPDATE tests set title = $1 ,science_id = $2 where test_id = $3 returning * 
`
module.exports = {
    GETSELECT,POSTSELECT , PUTSELECT
}