var url = "https://www.robotevents.com/api/v2/";
var ap = require("./vexAPI.fetch")

var swagger = require("./swagger.json");

module.exports = {
    //Events
    async init(token) {
        ap.init(token)
    },
    swagger,
    async events(__query) {
        if (!__query) { __query = "" };
        return await ap.fetch(url+"/events" + __query)
    },
    async event(id, __query) {
        if (!__query) { __query = "" };
        return await ap.fetch(url + "/events/" + id + __query)
    },
    async event_teams(id, __query) {
        if (!__query) { __query = "" };
        return await ap.fetch(url + "/events/" + id + "/teams" + __query)
    },
    async event_skills(id, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/events/" + id + "/skills" + __query)
    },
    async event_awards(id, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/events/" + id + "/awards" + __query)
    },
    async event_divisions(id, div, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/events/" + id + "/divisions/" + div + "matches" + __query)
    },
    async event_finalrankings(id, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/events/" + id + "/divisions/" + div + "finalistRankings" + __query)
    },
    async event_rankings(id, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/events/" + id + "/divisions/" + div + "rankings" + __query)
    },
    //Teams
    async teams(__query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/teams" + __query)
    },
    async team(id, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/teams/" + id + __query)
    },
    async team_events(id, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/teams/" + id + "/events" + __query)
    },
    async team_matches(id, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/teams/" + id + "/matches" + __query)
    },
    async team_rankings(id, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/teams/" + id + "/rankings" + __query)
    },
    async team_skills(id, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/teams/" + id + "/skills" + __query)
    },
    async team_awards(id, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/teams/" + id + "/awards" + __query)
    },
    //Programs
    async programs(__query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/programs" + __query)
    },
    async program(id, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/programs/" + id + __query)
    },
    //Season
    async season(__query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/seasons" + __query)
    },
    async seasons(id, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/seasons/" + id + __query)
    },
    async season_events(id, __query) {
        if (!__query) { __query = "" }
        return await ap.fetch(url + "/seasons/" + id + "/events" + __query)
    }
}
