<template>
    <div class="hompage">
        <h1 class="center">Community Call Utils</h1>
        <main class="pa4 black-80">
            <div class="measure center">
                <fieldset id="a" class="ba b--transparent ph0 mh0">
                <legend class="f4 fw6 ph0 mh0">Broadcast Community Call 🎉🎊🎉 </legend>
                <div class="mt3">
                    <label class="db fw6 lh-copy f6" for="sync-date">Date of Community Sync</label>
                    <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="textfield" name="sync-date"  id="sync-date" v-model="syncDate">
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="textfield">Name of Call</label>
                    <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="textfield" name="textfield"  id="textfield" v-model="callName">
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="textfield">Announcment</label>
                    <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="textfield" name="textfield"  id="textfield" v-model="announcement">
                </div>
                </fieldset>
                <div class="">
                <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib popup" type="submit" value="Submit" @click="createPost()">
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import config from '../../config.json'
export default {
  name: 'HomePage',
  data: () => ({
    callName: null,
    syncDate: null,
    announcement: null
  }),
  methods: {
    async createPost() {
      let url = `https://api.github.com/repos/pkafei/Distributed-Medicine/issues?access_token=${config.token}`
      let agenda = `
      <h1>Posting Here</h1>
      # Agenda and Notes

        Please add your agenda items before the call.

        Endeavour      | Moderator            | Notetaker | Time (PST - UTC - CET) | Pad
        :------------: | :-------------: | :-------: | :--------------------: | :----:
        All Hands Call | $MODERATOR    | $NOTETAKER  | 9:00 **17:00** 18:00  | [agenda and notes](https://docs.google.com/document/d/1WHyIZhBo2eEgYXlZ5HLHg6a6ZWTH3tV848sWkYBJjJA/edit)
      `
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
        'Accept': 'application/vnd.github.v3.html+json',
        'Content-Type': 'application/vnd.github.v3.html'
        },
        body: JSON.stringify({
          title: this.syncDate,
          body: `${agenda} \n` + this.callName 
        })
      })
      const content = await rawResponse.json();
      console.log(content)
    }
  }
}
</script>
<style>
    h1 {
        text-align: center;
    }
</style>