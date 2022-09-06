const GETRESALET = `
select 
r.*,
(select univername from universty where univer_id = (select univer_id from faculty where faculty_id = r.faculty_id)),
(select facultyname from faculty where faculty_id = r.faculty_id),
(select kontrakt_score from faculty where faculty_id = r.faculty_id),
(select 
    case
        when f.kontrakt_score <= kontrakt_score then 'Talabalikka tavsiya etilmadi' 
        when grant_score <= f.grant_count then 'davlat granti' 
        else 'kontrakt asosida'  
    end
from faculty where faculty_id = r.faculty_id
) as education
from results as r where case  when $1 > 0 then r.user_id = $1
                            else true
                            end
`



module.exports = {
    GETRESALET
}