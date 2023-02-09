const baseURL = "https://www.robotevents.com/api/v2/"
const axios = require("axios").default

let api = null
class API{
    constructor(token){
        api = axios.create({
            baseURL: baseURL,
            headers: {"Authorization": `Bearer ${token}`}
        })
    }

    events = {
            base(options = { id: [], sku: [], team: [], season: [], start: "", end: "", level: [], myEvents: false, eventTypes: []}){
                return api.get(`/events?${new URLSearchParams(options).toString()}`)
            },
            ID(id){
                return api.get(`/events/${id}?${new URLSearchParams(options).toString()}`)
            },
            teams(id, options = {number: [], registered: null, grade: [], country: [], myTeams: false}){
                return api.get(`/events/${id}/teams?${new URLSearchParams(options).toString()}`)
            },
            skills(id, options = {team: [], type:[]}){
                return api.get(`/events/${id}/skills?${new URLSearchParams(options).toString()}`)
            },
            awards(id, options = {team: [], winner:[]}){
                return api.get(`/events/${id}/awards?${new URLSearchParams(options).toString()}`)
            },
            divisions: {
                matches(id, div, options = {team: [], round: [], instance: [], matchnum: []}){
                    return api.get(`/events/${id}/divisions/${div}/matches?${new URLSearchParams(options).toString()}`)
                },
                finalistRankings(id, div, options = {team: [], rank: []}){
                    return api.get(`/events/${id}/divisions/${div}/finalistRankings?${new URLSearchParams(options).toString()}`)
                },
                rankings(id,div, options = {team: [], rank: []}){
                    return api.get(`/events/${id}/divisions/${div}/rankings?${new URLSearchParams(options).toString()}`)
                }
            }
    }

    teams = {
        base(options = { id: [], number: [], event: [], registered: true, program: [], grade: [], country: [], myTeams: false}){
            return api.get(`/teams?${new URLSearchParams(options).toString()}`)
        },
        ID(id){
            return api.get(`/teams/${id}`)
        },
        events(id, options = {sku: [], season: [], start: "", end: "", level: []}){
            return api.get(`/teams/${id}/events?${new URLSearchParams(options).toString()}`)
        },
        matches(id){
            return api.get(`/teams/${id}/matches`)
        },
        rankings(id){
            return api.get(`/teams/${id}/rankings`)
        },
        skills(id){
            return api.get(`/teams/${id}/skills`)
        },
        awards(id){
            return api.get(`/teams/${id}/awards`)
        }
    }

    program = {
        base(){
            return api.get(`/programs`)
        },
        ID(id){
            return api.get(`/programs/${id}`)
        }
    }

    season = {
        base(){
            return api.get(`/seasons`)
        },
        ID(id){
            return api.get(`/seasons/${id}`)
        },
        events(id){
            return api.get(`/seasons/${id}/events`)
        }
    }
}

module.exports = {
    API
}