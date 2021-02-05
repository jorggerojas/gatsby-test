import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { css } from 'styled-components';
import GlobalStyle from '../utils/global';
import MiniPost from '../organisms/MiniPost';
import Newsletter from '../organisms/Newsletter';
import Data from '../hooks/postsData';

const data = [
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'BLOG - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'PODCAST - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'FREE DOWNLOAD - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'VIDEO - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'BLOG - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'PODCAST - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'FREE DOWNLOAD - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'VIDEO - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'BLOG - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'PODCAST - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'FREE DOWNLOAD - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'VIDEO - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'BLOG - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'PODCAST - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'FREE DOWNLOAD - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'VIDEO - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'BLOG - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'PODCAST - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'FREE DOWNLOAD - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'VIDEO - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'BLOG - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'PODCAST - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'FREE DOWNLOAD - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'VIDEO - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'BLOG - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'PODCAST - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'FREE DOWNLOAD - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'VIDEO - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'BLOG - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'PODCAST - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'FREE DOWNLOAD - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'VIDEO - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'BLOG - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'PODCAST - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'FREE DOWNLOAD - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary: "This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj",
    description: [
      {
        text: 'VIDEO - 7 MINUTE READ',
        size: 'xxs',
        padding: { right: 'md' },
        family: 'DM Sans',
      },
      {
        text: 'SALES AND MARKETING, ENGINEERING',
        size: 'xxs',
        color: 'info',
        family: 'DM Sans',
        hide: 'sm',
      },
    ],
    title: '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name'
    }
  },
];

const Blog = () => {
  const dataPosts = Data();
  const [page, setPage] = useState(10);
  const [postData, setPostData] = useState([]);
  const [hasMoreContent, setHasMoreContent] = useState(true);
  const loadData = () => {
    if ((postData.length >= dataPosts.length)) {
      setHasMoreContent(false);
      return;
    }
    setTimeout(() => {
      setPostData(postData.concat(dataPosts.slice(page, (page + 10))));
      setPage((page + 10));
    }, 400);
  }
  useEffect(() => {
    setPostData(postData.concat(dataPosts.slice(0, page)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <GlobalStyle />
      <InfiniteScroll
        css={css`overflow: hidden !important;`}
        data-sal="slide-up"
        data-sal-delay="1"
        data-sal-easing="ease"
        dataLength={postData.length}
        next={loadData}
        loader={<h4>Loading...</h4>}
        hasMore={hasMoreContent}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {postData.map(({ node }, index) => {
          return (
            <div key={`n${index}`}>
              {index % 10 === 0 && index !== 0 ? <Newsletter /> : null}
              <MiniPost
                cover={index.toString().charAt(index.toString().length - 1) === "0"}
                key={index}
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="easeIn"
                type={'video'}
                info={'jijiji'}
                title={node.title}
                text={node.plaintext}
                src={node.feature_image}
                alt={node.feature_image}
              />
            </div >
          )
        })}
      </InfiniteScroll>
    </>
  );
};

export default Blog;
