const vApi = require("./vexAPI");
let vex = new vApi.API("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODA5Y2Q4OWE4MWRiZGI2YTE4MWI4OTQxMDFmN2ZkYWQ2MDk4NjhlNTI1ODdlNWNiMjg2ODNiMWE3YzAzNjk3YjQ5ZTQ1NmMxN2VmM2FiNzAiLCJpYXQiOjE2NDQxMTg4MDQuNjU3MTYyOSwibmJmIjoxNjQ0MTE4ODA0LjY1NzE2NiwiZXhwIjoyNTkwODAzNjA0LjU5NzUyODksInN1YiI6Ijk0NjYwIiwic2NvcGVzIjpbXX0.rZPr0e2hXH4RVDbhxK1Rfc9ya63-Ret89N7Q-QF6qLX0DVSXyOfeoE5hFy2FMDXvMKoM-eJ0wdSW0Po0K3VS3mO5I9J7aKBhma1_T1_SZqfanDmEZSRHqIyZDcafHpR-WVu0gMXqGMpIfrdanNDiM3r_tTAz6AzSJdnt34pSrzMFngm-WiAXiz1AzKMhBHoXVCFHqOkn1PkZ7yajzWFwQCH5aeKYk8FE0D65QA-prwAMB9OJdw9n8UwJJf_cdsQD9kGCO2VjVlt7OVQEumb6zvI0Mw3uR72KQrbaLfIwnLCFU5pAnaJqM43ilkDvIUBX_mVNnyWCdopz-pUu24Hw6AwAgMPEZ3kcIsPkV9EYHazU7tipSv-ylWT1sZH34DgDx94TGBS3dnC97AObRYk1giEzbft4PFNTZ4NqeMJnWFJ_hiyu21CJcG2qR4Zx76L4UnNEdFCFUKllDhHCS8KoRO0SNF965Y6gEiwkL7M3bxritbpMEvi7v6RQbfmiVb6JEPFfFsr56m6ef4W41ximtbt27dLSmcxH7Xp0qY1BH06jh6sfmTIyNngsksw_JlBqR_RDi-CboBcGA7g50rIZEEyumtLLiR1anAPSuxAmtG2eEaS51u4fkJuJB1XZalbv_9snb1-h-Fzlas3C2lxNDZT4oQcPBsDM7Ikc2tYvK1E");
async function m(){
    console.log("running")
    let data = await vex.teams.events(93708, {start: "1/1/2023"})
    console.log(data.data)
}
m()