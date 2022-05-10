---
layout: default
---


<!-- Header -->
<header class="">
  <div class="header-bg-fade-in"></div>
  <div class="header-bg-fade-out"></div>
  <div class="header-bg-fade-center"></div>
  <div class="container pb-md-3 pb-lg-5">
    <div class="px-4 py-5 my-5 text-center poap-purple-dark">
      <h1 class="display-4 fw-bold mt-5">Build With POAP.</h1>
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6">
          <p class="h4 fw-light mb-4">
            Receive seed funding to plant your idea and grow it into a flourishing product!
          </p>
          <a href="#apply" class="btn btn-primary btn-lg px-4 m-1">Apply for Funding</a>
          <p class="mt-3">
            <!-- <a href="/en/ideas" class="h5 fw-light poap-purple-dark">Get Inspiration {{site.data.icons.arrow_right}}</a> -->
          </p>
        </div>
      </div>
    </div>
  </div>
</header>


<!-- Intro -->
<section id="intro" class="">
  <div class="container py-5 my-5">
    <!-- <h2 class="h1 fw-bold mb-3 text-center">Introduction</h2> -->
    <div class="mb-5 text-center poap-purple-dark">
      <h2 class="h1 fw-bold">Introduction</h2>
      <p class="col-md-10 col-lg-7 mx-auto lead text-center">
        A diam sollicitudin tempor id eu nisl nunc mi.
      </p>
    </div>
    <div class="row justify-content-center mt-4">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Dignissim suspendisse in est ante in nibh. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Amet luctus venenatis lectus magna. 
        </p>
        <p class="mb-4">
          Phasellus egestas tellus rutrum tellus pellentesque eu. Nam aliquam sem et tortor consequat id. Praesent tristique magna sit amet. Viverra mauris in aliquam sem. Rutrum quisque non tellus orci ac auctor. Et malesuada fames ac turpis egestas. Auctor eu augue ut lectus arcu bibendum at varius. Vitae justo eget magna fermentum iaculis eu non. Rhoncus est pellentesque elit ullamcorper dignissim cras.
        </p>
      </div>
    </div>
  </div>
</section>


<!-- Apply -->
<section id="apply" class="bg-light">
  <div class="container py-5 my-5">
    <div class="mb-5 text-center poap-purple-dark">
      <h2 class="h1 fw-bold">Apply for Funding</h2>
      <p class="col-md-10 col-lg-7 mx-auto lead text-center">
        Please provide as much detail as possible.
      </p>
    </div>
    <div class="row justify-content-center mt-4">
      <div class="col mb-4" style="max-width: 500px;">
        <form id="applyForm" class="mx-auto mb-4 poap-purple-dark" target="submitted" onsubmit="return submitForm()">
          <!-- Name -->
          <div class="mb-3">
            <label for="applyName" class="form-label">Name</label>
            <input value="test name" type="text" class="form-control" id="applyName" aria-describedby="applyNameHelp" required>
            <div id="applyNameHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <!-- Email -->
          <div class="mb-3">
            <label for="applyEmail" class="form-label">Email address</label>
            <input value="test@email.com" type="email" class="form-control" id="applyEmail" aria-describedby="applyEmailHelp" required>
            <div id="applyEmailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <!-- Description -->
          <div class="mb-3">
            <label for="applyDescription" class="form-label">
              Project Description
            </label>
            <div id="applyDescriptionHelp" class="form-text">
              <p class="mb-2">
                Please include the following info:
              </p>
              <ul class="">
                <li>Some sample placeholder text</li>
                <li>Some sample placeholder text</li>
                <li>Some sample placeholder text</li>
              </ul>
            </div>
            <textarea class="form-control" id="applyDescription" aria-describedby="applyDescriptionHelp" rows="3" required>this is a test description</textarea>
          </div>
          <!-- Confirmation -->
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="applyCheck" checked required>
            <label class="form-check-label small text-muted" for="applyCheck">I understand POAP inc. has no obligation for funding and maintains full discretion on which projects to fund.</label>
          </div>
          <!-- Submit -->
          <button id="applySubmit" type="submit" class="btn btn-primary">Submit</button>
        </form>
        <iframe name="submitted" id="submitted" class="d-none"></iframe>
        <div id="submitSuccess" class="d-none poap-purple-dark">
          <p class="fw-bold">
            <span class="poap-mint me-2">&#x2714;</span>
            Application Submitted
          </p>
          <p>Thank you for applying, we'll be in touch!</p>
        </div>
      </div>
    </div>
  </div>
</section>

