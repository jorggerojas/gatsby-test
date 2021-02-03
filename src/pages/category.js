import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled, { css } from 'styled-components';
import GlobalStyle from '../utils/global';
import { MiniPost } from '../organisms/MiniPost';
import Newsletter from '../organisms/Newsletter';
import { Title } from '../cells/Title';
import config from '../utils/config';

const { display, breakpoints } = config;
const data = [
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
const StyledTitleContainer = styled.div`
    transition: padding 0.25s cubic-bezier(0.12, 0, 0.39, 0);
    padding-top: ${display.mobile.sm};
    padding-bottom: ${display.mobile.sm};
    padding-left: ${display.mobile.sm};
    padding-right: ${display.mobile.sm};
    @media (min-width: ${breakpoints.sm}) {
        padding-left: ${display.mobile.sm};
        padding-right: ${display.mobile.sm};
        padding-top: ${display.mobile.sm};
        padding-bottom: ${display.mobile.sm};
    }
    @media (min-width: ${breakpoints.md}) {
        padding-left: ${display.mobile.sm};
        padding-right: ${display.mobile.sm};
        padding-top: ${display.mobile.sm};
        padding-bottom: ${display.mobile.sm};
    }
    @media (min-width: ${breakpoints.lg}) {
        padding-left: 2.063rem;
        padding-right: 6.951rem;
        padding-top: ${display.desktop.sm};
        padding-bottom: ${display.desktop.sm};
    }
    @media (min-width: ${breakpoints.xl}) {
        padding-left: 10.313rem;
        padding-right: 10.389rem;
        padding-top: ${display.desktop.sm};
        padding-bottom: ${display.desktop.sm};
    }
`;

const Category = ({ category }) => {
    const [page, setPage] = useState(10);
    const [postData, setPostData] = useState([]);
    const [hasMoreContent, setHasMoreContent] = useState(true);
    const isCover = (index) => index.toString().charAt(index.toString().length - 1) === "0";
    const loadData = () => {
        if ((postData.length >= data.length)) {
            setHasMoreContent(false);
            return;
        }
        setTimeout(() => {
            setPostData(postData.concat(data.slice(page, (page + 10))));
            setPage((page + 10));
        }, 400);
    }
    useEffect(() => {
        setPostData(postData.concat(data.slice(0, page)));
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
                <StyledTitleContainer>
                    <Title size="d3">{category || "Sales and Marketing"}</Title>
                </StyledTitleContainer>
                {postData.map((post, index) => {
                    return (
                        <div key={`n${index}`}>
                            {index % 10 === 0 && index !== 0 ? <Newsletter /> : null}
                            <MiniPost
                                cover={index === 0 ? false : isCover(index)}
                                key={index}
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
                        </div >
                    )
                })}
            </InfiniteScroll>
        </>
    );
};

export default Category;
