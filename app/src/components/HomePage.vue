<template>
    <div class="hompage">
        <h1 class="center">Community Call Utils</h1>
        <main class="pa4 black-80">
            <div class="measure center">
                <fieldset id="a" class="ba b--transparent ph0 mh0">
                <legend class="f4 fw6 ph0 mh0">Broadcast Community Call 🎉🎊🎉 </legend>
                <div class="mt3">
                    <label class="db fw6 lh-copy f6" for="sync-date">Date</label>
                    <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="textfield" name="sync-date"  id="sync-date" v-model="syncDate">
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="textfield">Presenter</label>
                    <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="textfield" name="textfield"  id="textfield" v-model="presenter">
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="textfield">Topic</label>
                    <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="textfield" name="textfield"  id="textfield" v-model="topic">
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
export default {
  name: 'HomePage',
  data: () => ({
    syncDate: null,
    presenter: null,
    topic: null
  }),
  methods: {
    async createPost() {
      let url = `https://api.github.com/repos/pkafei/Distributed-Medicine/issues?access_token=01f8414215a5942c6984ff9c8c39df50751b5679`
      let call_date = this.syncDate
      let agenda = "<h1>Agenda and Notes</h1>"
      let agenda_items = `Please add items before the call.`
      let call_details = "<table><td>Insert Call Details Here</td></table><br>"
      let topic = "\n Topic: "

      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
        'Accept': 'application/vnd.github.v3.html+json',
        'Content-Type': 'application/vnd.github.v3.html'
        },
        body: JSON.stringify({
          title: `IPFS Weekly Call ${this.syncDate} ⚡️ 📞`,
          body: `${agenda_items} \n \n` + call_details + `Presenter: ` + this.presenter + topic
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
