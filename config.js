
global.getGroupAdmins = (participants) => { admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)}
return admins
}
global.getMembers = (participants) => { 
membros = []
for (let i of participants) { 
if(i.admin == null) membros.push(i.id)}
return membros
}