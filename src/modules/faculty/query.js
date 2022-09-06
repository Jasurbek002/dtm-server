
const GETSELECT = `
select * from  universty as u
left JOIN faculty  as f on u.univer_id = f.univer_id
where u.univer_id = $1;
`  

const POSTSELECT = `
insert into faculty(univer_id,facultyname,grant_score,kontrakt_score,grant_count,kontrakt_count)
values ($1,$2,$3,$4,$5,$6) returning *
`



const PUTSELECT = `
UPDATE faculty SET univer_id = $1, facultyname= $2 ,grant_score = $3,
 kontrakt_score = $4, grant_count = $5,kontrakt_count = $6
 returning *
`

module.exports = {
    GETSELECT, POSTSELECT,PUTSELECT
}