

const tablet = `
    text-align: left;

    a.btn.btn-get-started,
    button.btn.btn-shorten-it,
    a.btn.btn-copy {
      transition: all 0.2s;
    }

    a.btn.btn-get-started:hover,
    button.btn.btn-shorten-it:hover,
    a.btn.btn-copy:hover {
      -webkit-filter: brightness(115%);
      filter: brightness(115%);
    }


    div.hero {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      gap: 0 2rem;
      grid-area: 2 / 1 / auto / span 2;
      padding-bottom: 6rem;
    }

    div.hero div.hero-text {
      grid-area: 1 / 1 / auto / span 1;
    }

    div.hero div.hero-img-container {
      grid-area: 1 / 2 / auto / span 1;
    }

    div.hero form.shorten-form {
      background: url("../../assets/svgs/bg-shorten-desktop.svg")   center center / 100% 100%,
        no-repeat var(--dark-violet);
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: flex-start;
      margin-top: 3rem;
    }

    div.hero form.shorten-form label {
      width: calc(100% - 130px);
    }

    div.hero form.shorten-form input[type="text"] {
      width: 100%;
    }

    div.hero form.shorten-form button.btn-shorten {
      width: max-content;
      margin-left: 1rem;
      margin-top: 0;
    }

    div.hero form.shorten-form p.error-msg {
      order: 3;
    }

    div.shortened-links div.shortened-link-container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }

    div.shortened-links div.shortened-link-container p.link-to-shorten  {
      border-bottom: none;
      padding-bottom: 0;
      margin-right: 1rem;
      max-width: calc(100% - 500px);
    }

    div.shortened-links div.shortened-link-container p.shortened-link {
      margin-left: auto;
    }

    div.shortened-links div.shortened-link-container a.btn-copy {
      margin-left: 1rem;
      width: max-content;
    }

`

export { tablet };