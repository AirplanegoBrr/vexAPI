var url = "https://www.robotevents.com/api/v2/";
var ap = require("./vexAPI.fetch")

module.exports = {
    //Events
    async init(token) {
        ap.init(token)
    },
    async events() {
        return await ap.fetch(url+"/events")
    },
    async event(id) {
        return await ap.fetch(url + "/events/" + id)
    },
    async event_teams(id) {
        return await ap.fetch(url + "/events/" + id + "/teams")
    },
    async event_skills(id) {
        return await ap.fetch(url + "/events/" + id + "/skills")
    },
    async event_awards(id) {
        return await ap.fetch(url + "/events/" + id + "/awards")
    },
    async event_divisions(id, div) {
        return await ap.fetch(url + "/events/" + id + "/divisions/" + div + "matches")
    },
    async event_finalrankings(id) {
        return await ap.fetch(url + "/events/" + id + "/divisions/" + div + "finalistRankings")
    },
    async event_rankings(id) {
        return await ap.fetch(url + "/events/" + id + "/divisions/" + div + "rankings")
    },
    //Teams
    async teams() {
        return await ap.fetch(url + "/teams")
    },
    async team(id) {
        return await ap.fetch(url + "/teams/" + id)
    },
    async team_events(id) {
        return await ap.fetch(url + "/teams/" + id + "/events")
    },
    async team_matches(id) {
        return await ap.fetch(url + "/teams/" + id + "/matches")
    },
    async team_rankings(id) {
        return await ap.fetch(url + "/teams/" + id + "/rankings")
    },
    async team_skills(id) {
        return await ap.fetch(url + "/teams/" + id + "/skills")
    },
    async team_awards(id) {
        return await ap.fetch(url + "/teams/" + id + "/awards")
    },
    //Programs
    async programs() {
        return await ap.fetch(url + "/programs")
    },
    async program(id) {
        return await ap.fetch(url + "/programs/" + id)
    },
    //Season
    async season() {
        return await ap.fetch(url + "/seasons")
    },
    async seasons(id) {
        return await ap.fetch(url + "/seasons/" + id)
    },
    async season_events(id) {
        return await ap.fetch(url + "/seasons/" + id + "/events")
    }


}
