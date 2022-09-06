

const GETSELECT = `
select * from science
`
const POSTSELECT = `
insert into science(univer_id,sciencename)
values($1,$2) returning *
`

const PUTSELECT = `
UPDATE science SET univer_id = $1, sciencename = $2  
where science_id = $3 returning *
`
module.exports = {
    GETSELECT, POSTSELECT, PUTSELECT
}