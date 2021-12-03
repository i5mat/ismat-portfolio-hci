<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xl-5">
          <h1 class="display-1">Hello, I'm Wan Muhammad Ismat</h1>
          Yes, that's my name. A passionate learner who is currently enrolled at
          UTeM and majoring in Software Engineering.
        </div>
        <div class="col-lg-6 col-xl-7">
          <img
            src="/assets/images/top.png"
            alt=""
            width="512px"
            height="512px"
            class="rounded mx-auto d-block"
          />
        </div>
      </div>
    </div>
    <div class="container-fluid" style="background-color: gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-xl-7">
            <img
              src="/assets/images/learning.png"
              alt=""
              width="512px"
              height="512px"
            />
          </div>
          <div class="col-lg-6 col-xl-5 mt-5" style="color: white">
            <h1 class="display-1">Academic</h1>
            SMK Taman Melati - 2016
            <span class="badge rounded-pill bg-primary">Secondary School</span
            ><br /><br />
            Diploma Information Technology (UTeM) - 2017 to 2020
            <span class="badge rounded-pill bg-primary">Diploma</span
            ><br /><br />
            Bachelor of Computer Science (Software Development) (UTeM) - 2017 to
            2020 <span class="badge rounded-pill bg-primary">Degree</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h1 class="display-1 mt-5">My Projects</h1>
      <div class="row mb-5 mt-5">
        <div class="col">
          <div class="card text-center">
            <div class="card-header">
              <span
                class="badge rounded-pill bg-primary mx-1"
                v-for="topic in githubDataEtechify.topics"
                :key="topic.id"
                >{{ topic }}</span
              >
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ githubDataEtechify.full_name }}</h5>
              <p class="card-text">
                {{ githubDataEtechify.description }}
              </p>
              <a
                :href="githubDataEtechify.html_url"
                target="_blank"
                class="btn btn-success"
                >Go</a
              >
            </div>
            <div class="card-footer text-muted">
              {{ githubDataEtechify.updated_at | formatDate }}
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center">
            <div class="card-header">
              <span
                class="badge rounded-pill bg-primary mx-1"
                v-for="topic in githubDataManagement.topics"
                :key="topic.id"
                >{{ topic }}</span
              >
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ githubDataManagement.full_name }}</h5>
              <p class="card-text">
                {{ githubDataManagement.description }}
              </p>
              <a
                :href="githubDataManagement.html_url"
                target="_blank"
                class="btn btn-success"
                >Go</a
              >
            </div>
            <div class="card-footer text-muted">
              {{ githubDataManagement.updated_at | formatDate }}
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center">
            <div class="card-header">
              <span
                class="badge rounded-pill bg-primary mx-1"
                v-for="topic in githubDataUEMS.topics"
                :key="topic.id"
                >{{ topic }}</span
              >
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ githubDataUEMS.full_name }}</h5>
              <p class="card-text">
                {{ githubDataUEMS.description }}
              </p>
              <a
                :href="githubDataUEMS.html_url"
                target="_blank"
                class="btn btn-success"
                >Go</a
              >
            </div>
            <div class="card-footer text-muted">
              {{ githubDataUEMS.updated_at | formatDate }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xl-7">
          <img
            src="/assets/images/Working.png"
            alt=""
            width="512px"
            height="512px"
          />
        </div>
        <div class="col-lg-6 col-xl-5 mt-5">
          <h1 class="display-1">Skills</h1>
          <label class="h5">Laravel</label>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 75%"
            ></div>
          </div>
          <label class="h5 mt-3">Vue JS</label>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 70%"
            ></div>
          </div>
          <label class="h5 mt-3">MySQL</label>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 75%"
            ></div>
          </div>
          <label class="h5 mt-3">AWS S3 Bucket</label>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 95%"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-5 mb-5" style="text-align: center">
        <h1 class="display-1">Work Experience</h1>
        <div class="col mt-5">
          <img
            src="/assets/images/XTlogo.png"
            class="rounded mx-auto d-block mb-3"
            alt="..."
            width="400px"
            height="210px"
          />
          <h4 class="display-6">Software Developer</h4>
          <figure>
            <blockquote class="blockquote">
              <p>Xmiryna Technology</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Jun 2020 until Present
            </figcaption>
          </figure>
        </div>
        <div class="col mt-5" style="text-align: center">
          <img
            src="/assets/images/tmlogo.png"
            class="rounded mx-auto d-block mb-3"
            alt="..."
            width="400px"
            height="210px"
          />
          <h4 class="display-6">Internship</h4>
          <figure>
            <blockquote class="blockquote">
              <p>Telekom Malaysia</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Jun 2019 until Aug 2019
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <div class="container-fluid" style="background-color: gray">
      <div class="container">
        <div class="row">
          <div class="col mt-5 mb-5" style="text-align: center; color: white">
            <h1 class="display-1">Personal Information</h1>
            <img
              src="/assets/images/ismat.jpg"
              class="img-fluid rounded-start mb-3"
              alt="..."
            />
            <h4>Wan Muhammad Ismat Bin Wan Azmy</h4>
            <h5>B031920032</h5>
            <h5>+(60) 17-217 8319</h5>
            <h5>ismatazmy@live.com</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col mt-5 mb-4" style="text-align: center">
          <p>Copyright ©️ Ismat Azmy, 2021 for Human Computer Interface</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      githubDataUEMS: [],
      githubDataManagement: [],
      githubDataEtechify: [],
    };
  },
  created() {
    this.getGithubDataUEMS();
    this.getGithubDataManagement();
    this.getGithubDataEtechify();
  },
  methods: {
    getGithubDataUEMS() {
      axios.get("https://api.github.com/repos/i5mat/UEMS").then((resp) => {
        this.githubDataUEMS = resp.data;
        console.log(resp.data);
      });
    },
    getGithubDataManagement() {
      axios
        .get("https://api.github.com/repos/i5mat/data-management-vue")
        .then((resp) => {
          this.githubDataManagement = resp.data;
          console.log(resp.data);
        });
    },
    getGithubDataEtechify() {
      axios.get("https://api.github.com/repos/i5mat/e-Techify").then((resp) => {
        this.githubDataEtechify = resp.data;
        console.log(resp.data);
      });
    },
  },
};
</script>
