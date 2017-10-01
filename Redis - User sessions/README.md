[TOC levels=1-3]: # "#### Table of Contents"
#### Table of Contents
- [ **Redis Database** ](#heading-some-bold-1)
- [ **Why maintain User sessions** ](#heading-some-bold-1)
- [ **What is a "Cookie"** ](#heading-some-bold-1)
- [ **What is a "Session"** ](#heading-some-bold-1)
- [ **General workflow of session handling and management** ](#heading-some-bold-1)


## Introduction
* Redis is an open-source in-memory database project.
* It is used as a database, cache and message broker.

## Why maintain User sessions
I.  Any request coming from the browser would be received by the web server first.
  The web server is running with a load balancer configured.
*	There would be multiple instances running which would be connected with the common Redis Server.
*	Any request coming from the browser would go through the load balancer which would then decide which container to send it    to. Since different containers are connected to the same Redis server, and we will maintain the sessions, even if one server goes down the sessions will remain intact and the other containers would replace any downed servers.

This approach can easily scale up the web application.

II.  When a user connects the first time to a site, a session is created on the server to which the user was directed. If the site is load balanced and the user is directed to a second server on the next request, a new session is created. This is not an optimal situation. We need mechanism to ensure that a user is reconnected to the same server for the duration of a session.

## What is a "cookie"
* A cookie is a small piece of text stored on a user's computer by their browser. Common uses for cookies are authentication, **server session identification**, storing of site preferences and shopping cart items.
* Each time the users' web browser interacts with a web server it will pass the cookie information to the web server. 

## What is a "Session"?
* A session can be defined as a **server-side storage of information that is desired to persist throughout the user's interaction with the web site or web application.** 
* Instead of storing large and constantly changing information via cookies in the user's browser, only a unique identifier is stored on the client side (called a "session id"). This session id is passed to the web server every time the browser makes an HTTP request.
* The web application pairs this session id with it's internal database and retrieves the stored variables for use by the requested page.

## General workflow of session handling and management
* Sessions can store their information in different ways. The popular ways to store session data is Storing Session Data in a Memory Cache.
* A Memory Cache is a place where small chunks of key-value data can be stored. example of memory caches that isused to store session information is  Redis. 
* When storing session data in a memory cache, the server will still use a cookie, but the cookie will only contain a unique sessionId. This sessionId will be used by the server to perform a lookup against the store.

The session itself resides in the server. For each request, the client transmits the session ID in a cookie or, if the browser does not allow cookies, the server automatically writes the session ID into the URL.

![alt text][logo]

[logo]: 








