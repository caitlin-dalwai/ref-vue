import { createStore } from 'vuex'

export default createStore({
  // where we store our data
  // data --> property name, null -->property value
  state: { 
    education:null,
    aboutMe:null,
    workExp:null,
    projects:null,
    testimonials:null,
    skills:null
  },
  // used to get things eg. filter()
  getters: {
  },
  // use this to change/update the state
  // commiting a mutation
  mutations: {

    setAboutMe(state,payload){
      state.aboutMe = payload
    },
    setEducation(state,payload){
      state.education = payload
    },
    setWorkExp(state,payload){
      state.workExp = payload
    },
    setProjects(state,payload){
      state.projects = payload
    },
    setTestimonials(state,payload){
      state.testimonials = payload
    },
    setSkills(state,payload){
      state.skills = payload
    }
  },
  // runs all async code
  // dispatching a action
  actions: {
    // async getAboutMe(context){
    //   let fetchedInfo = await fetch('https://caitlin-dalwai.github.io/first-api/data/')
    //   let converted = await fetchedInfo.json()
    //   context.commit('setAboutMe',converted.AboutMe)
    //   console.log(converted);
    // },
    // async getEducation(context){
    //   let fetchedInfo = await fetch('https://caitlin-dalwai.github.io/first-api/data/')
    //   let converted = await fetchedInfo.json()
    //   context.commit('setEducation',converted.Education)
    //   console.log(converted);
    // },
    // async getWorkExp(context){
    //   let fetchedInfo = await fetch('https://caitlin-dalwai.github.io/first-api/data/')
    //   let converted = await fetchedInfo.json()
    //   context.commit('setWorkExp',converted.WorkExp)
    //   console.log(converted);
    // },
    // async getProjects(context){
    //   let fetchedInfo = await fetch('https://caitlin-dalwai.github.io/first-api/data/')
    //   let converted = await fetchedInfo.json()
    //   context.commit('setProjects',converted.Projects)
    //   console.log(converted);
    // },
    // async getTestimonials(context){
    //   let fetchedInfo = await fetch('https://caitlin-dalwai.github.io/first-api/data/')
    //   let converted = await fetchedInfo.json()
    //   context.commit('setTestimonials',converted.Testimonials)
    //   console.log(converted);
    // },
    // async getSkills(context){
    //   let fetchedInfo = await fetch('https://caitlin-dalwai.github.io/first-api/data/')
    //   let converted = await fetchedInfo.json()
    //   context.commit('setSkills',converted.Skills)
    //   console.log(converted);
    // },

    // to only use one async to access all objs:
    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://caitlin-dalwai.github.io/first-api/data/')
      let data = await fetchedInfo.json()
    // dependent on json file
    let {aboutMe,Projects,education,skills,workExp,testimonials} = data
    console.log(data);
    commit('setAboutMe',aboutMe)
    commit('setEducation',education)
    commit('setWorkExp',workExp)
    commit('setProjects',Projects)
    commit('setTestimonials',testimonials)
    commit('setSkills',skills)
  }
},
  // if want to separate code from one another, makes more readable
  modules: {
  }
})
