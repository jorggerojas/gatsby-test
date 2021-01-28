import React from 'react';
import { Avatar } from '../cells/Avatar';
import GlobalStyle from '../utils/global';
import { MiniPost } from '../organisms/MiniPost';
import { Title } from '../cells/Title';
import { Paragraph } from '../cells/Paragraph';
import styled from 'styled-components';
import padding from '../utils/padding';
import Spacer from '../cells/Spacer';

const postData = [
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'blog',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'podcast',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'free-download',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
  {
    type: 'video',
    img: {
      src: 'https://www.ani.gov.co/sites/default/files/img-20190517-wa0003.jpg',
      alt: 'SITES',
    },
    summary:
      'This chapter will be about getting started with Git. We will begin by explaining some background on version control tools, then move on to how to get Git running on your system and finally how to get it set up to start working jfj jfjf sjsd js jsd jd sjdsj djjsdj jsd jd jsdjjjjjj',
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
    title:
      '¿Qué pasó con estos grandes futbolistas de la selección Sub-17 México? La 18 te sorprenderá',
    author: {
      name: 'Clara González',
      description: 'CEO at Company Name',
    },
  },
];
const TopPage = styled.div`
  ${padding({ vertical: 'sm', dis: true })}
`;
const AuthorPage = () => {
  return (
    <>
      <GlobalStyle />
      <TopPage>
        <Avatar
          src="https://i.pinimg.com/originals/64/3e/fe/643efe51394d635cbf544a25088ee269.png"
          alt="Carla Gonzalez foto"
          size="large"
        />
        <Spacer size="lg" />
        <Title level="D3">Clara González</Title>
        <Spacer size="micro" />
        <Paragraph size="sm" color="mutedGray">
          CEO at Company name
        </Paragraph>
      </TopPage>
      {postData.map((post, index) => {
        return (
          <MiniPost
            cover={index.toString().charAt(index.toString().length - 1) === '0'}
            key={``}
            data-sal="fade"
            data-sal-delay="100"
            data-sal-easing="easeIn"
            type={post.type}
            info={post.description}
            title={post.title}
            text={post.summary}
            src={post.img.src}
            alt={post.img.alt}
          />
        );
      })}
      {/* <Author
        name="Carla Gonzáles"
        job="CEO at company name"
        src="https://i.pinimg.com/originals/64/3e/fe/643efe51394d635cbf544a25088ee269.png"
      /> */}
    </>
  );
};

export default AuthorPage;
