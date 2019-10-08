export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: "Quản lý",
      url: '/manage',
      icon: 'fa fa-gears',
      children: [
        {
          name: 'Post',
          url: '/manage/post',
          icon: 'fa fa-newspaper-o'
        },
        {
          name: 'Influencers',
          url: '/manage/influencers',
          icon: '',
        },
        {
          name: "Trending",
          url: '/manage/trending',
          icon: ''
        },
        {
          name: 'Sentiment',
          url: '/manage/sentiment',
          icon: 'fa fa-heart-o'
        }
      ]
    },
    
    // {
    //   title: true,
    //   name: 'Theme',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },

    // {
    //   title: true,
    //   name: 'Components',
    //   wrapper: {
    //     element: '',
    //     attributes: {},
    //   },
    // },

    // {
    //   divider: true,
    // },
    // {
    //   title: true,
    //   name: 'Extras',
    // },

    {
      name: 'Download CoreUI',
      url: 'https://coreui.io/react/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Try CoreUI PRO',
      url: 'https://coreui.io/pro/react/',
      icon: 'icon-layers',
      variant: 'danger',
      attributes: { target: '_blank', rel: "noopener" },
    },
    
  ],
};
