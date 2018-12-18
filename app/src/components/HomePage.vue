<template>
    <div class="hompage">
        <h1 class="center">{{ msg }}</h1>
        <main class="pa4 black-80">
            <form class="measure center">
                <fieldset id="a" class="ba b--transparent ph0 mh0">
                <legend class="f4 fw6 ph0 mh0">Broadcast Community Call 🎉🎊🎉 </legend>
                <div class="mt3">
                    <label class="db fw6 lh-copy f6" for="email-address">Name of Working Group</label>
                    <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address">
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="password">Name of Call</label>
                    <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password">
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="password">Announcment</label>
                    <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password">
                </div>

                </fieldset>
                <div class="">
                <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit">
                </div>
            </form>
        </main>    
    </div>
</template>
<script>
export default {
  name: 'HomePage',
  data() {
      return {
          msg: "Commmunity Call Utils",
      }
  }
}
</script>
<style>
    h1 {
        text-align: center;
    }
</style>

