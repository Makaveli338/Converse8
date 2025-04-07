<template>
  <!-- Section 1 -->
  <section
    class="relative  lg:bg-[url('public/Background.jpg')] bg-cover bg-no-repeat bg-center mx-auto w-[96%] lg:h-[595px] mt-8 rounded-4xl bg-gradient-to-r from-[#EBFEC8] via-[#FFF4DA] to-[#DEE5FE]"
  >
    <!-- Text box -->

    <div class="md:pt-32 p-5 md:ml-16">
      <h1 class="font-semibold text-4xl">
        Great Customer Support, Even <br />
        <span class="text-[#00927C] underline"> Better Pricing</span>
      </h1>

      <p class="font-normal mt-4">
        Enhance customer relationships, streamline operations, and maximize
        <br />
        conversions with the best WhatsApp Business API platform.
      </p>

      <div class="mt-4 flex gap-4">
        <button
          class="button rounded-full border border-[#E5E5E5] bg-white hover:bg-[#2bd5bc]"
        >
          Book a demo
        </button>

        <button class="button btn-primary">Start Free Trial</button>
      </div>

      <div class="flex gap-4 mt-[10%] md:pb-10 lg:pb-0">
        <button
          class="bg-[#FFFFFFB2] font-medium rounded-full md:w-44 justify-center"
        >
          <p class="text-[#475467]">
            Total Users <br />
            <span class="text-black md:text-4xl"> +18K </span>
          </p>
        </button>
        <button
          class="bg-[#FFFFFFB2] font-medium rounded-full md:w-44 justify-center"
        >
          <p class="text-[#475467]">
            Running bots <br />
            <span class="text-black md:text-4xl"> +18K </span>
          </p>
        </button>
        <button
          class="bg-[#FFFFFFB2] font-medium rounded-full md:w-44 justify-center"
        >
          <p class="text-[#475467]">
            Running chats <br />
            <span class="text-black md:text-4xl"> +18K </span>
          </p>
        </button>
      </div>
    </div>

    <img class="hidden lg:block ml-[93%] -mt-110" src="public/lightning.svg" />

    <!-- Small container at the bottom -->

    <div
      class="lg:absolute bg-[url('public/Bgsmall.png')] lg:bottom-28 bg-cover md:-mb-30 md:ml-[50%] lg:right-0 w-full md:w-[370px] h-[148px]"
    >
      <div class="flex pt-4 ml-35 items-center">
        <img src="public/flower.png" />
        <p class="ml-2 font-semibold">Discover Our Plans</p>
      </div>

      <div class="mt-4 ml-8 flex items-center">
        <p class="text-sm text-[#475467] w-[236px] leading-[100%]">
          From small businesses, one man <br />
          teams, and large enterprises, we <br />
          have something for everyone.
        </p>

        <button
          class="bg-[url('public/Ellipse.png')] w-[62px] h-[66px] bg-no-repeat bg-contain text-sm text-white"
        >
          <div class="flex gap-1 -ml-2 -mt-2">
            Go
            <img src="public/rightarrow.svg" alt="" />
          </div>
        </button>
      </div>
    </div>
  </section>
  <!-- Section 2 -->

  <section class="mt-24 md:mt-50 lg:mt-24 mx-auto w-[96%]  content-center">
    <!-- Customer surpport made easy -->
    <div class="text-center">
      <div class="flex justify-center relative">
        <img
          class="-mt-12 md:-ml-[40%] -ml-[90%] lg:-ml-[26%] absolute"
          src="public/crown.svg"
          alt=""
        />
        <h1 class="font-medium text-[#101828] text-2xl">
          Customer Support Made Easy
        </h1>
      </div>
      <p class="mt-2 text-base text-[#475467]">
        We have all in one features to support your customer relationships from
        beginning to end
      </p>
    </div>

    <!-- Details card  -->

    <div
      class="mx-auto lg:ml-50 mt-24 bg-[#F1F0FE] lg:max-w-[60%] md:max-w-[80%] w-[96%] px-6  rounded-4xl grid md:grid-cols-2"
    >
      <div class="py-9  md:relative">
        <img src="public/Messageicon.svg" />
        <h1 class="font-medium mt-4">Chat Management</h1>
        <p class="mt-4 font-light text-[#12141D]">
          Reach your entire client base in one click with Convers8’s Broadcast
          Feature. Tag and categorize contacts for personalized messaging,
          keeping customers engaged and informed. Drive future sales by
          maintaining consistent, meaningful interactions on
          WhatsApp—effortless, effective, and built for growth.
        </p>
      </div>
      <img
        class="lg:absolute mt-10 mx-auto lg:ml-120 lg:-mt-10"
        src="public/phone1.svg "
        alt=""
      />
    </div>

    <!-- Details section card 2 -->
    <div class="mt-9 lg:flex grid gap-8 lg:px-6">
      <!-- Left container -->
      <div
        class="bg-[#FFFAF0] mx-auto lg:max-h-[489px] w-[96%] px-6 rounded-4xl bg-no-repeat"
      >
        <div class=" mt-9">
          <img src="public/bot.svg" />
          <h1 class="font-medium mt-4">Bot Studio</h1>
          <p class="mt-4 font-light text-[#12141D]">
            Create custom no-code chatbots for instant replies to frequent
            inquiries. Automate responses, manage mass communication, and
            deliver personalized interactions effortlessly. Streamline customer
            support with powerful automation tools, ensuring seamless, efficient
            conversations—saving time while keeping your audience engaged.
          </p>
        </div>
        <img class="mt-10 mx-auto" src="public/phone2.svg " alt="" />
      </div>

      <!-- Right container -->
      <div
        class="bg-[#F4FBF6] mx-auto lg:mt-0 lg:max-h-[489px] w-[96%] px-6 rounded-4xl"
      >
        <div class=" mt-9">
          <img src="public/loudspeaker.svg" />
          <h1 class="font-medium mt-4">Broadcast</h1>
          <p class="mt-4 font-light text-[#12141D]">
            Reach your entire client base in one click with Convers8’s Broadcast
            Feature. Tag and categorize contacts for personalized messaging,
            keeping customers engaged and informed. Drive future sales by
            maintaining consistent, meaningful interactions on
            WhatsApp—effortless, effective, and built for growth.
          </p>
        </div>
        <img class="md:mt-10 mx-auto" src="public/phone3.svg " alt="" />
      </div>
    </div>
  </section>

  <!-- How it works -->

   <div
      class="bg-[url('/Background2.jpg')]  bg-no-repeat h-auto lg:bg-contain bg-cover mx-auto container grid place-content-center rounded-4xl mt-15 lg:mt-60" 
    >
      <div class="lg:pt-20 lg:pb-4 py-10  px-12 flex">
        <img class=" hidden lg:block" src="public/startfromscratch.svg" />

        <div>
          <div class="flex items-baseline ">
            <h1 class="text-2xl text-[#101828] font-medium">How it works</h1>
            <img class="-ml-8" src="public/grass.svg" alt="" />
          </div>
          <p class="   font-light mt-2">
            Get started using Convers8 in 3 easy steps
          </p>

          <div class="flex gap-4 mt-8">
            <div class="grid -ml-5 justify-items-center">
              <div
                class="w-10 h-10 text-black bg-[#D1E6B2] rounded-full font-bold flex items-center justify-center"
              >
                1
              </div>
              <svg
                class="-mt-1"
                width="2"
                height="50"
                viewBox="0 0 2 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.26599"
                  y1="2.18557e-08"
                  x2="1.26599"
                  y2="50"
                  stroke="#D1E6B2"
                />
              </svg>
              <div
                class="-mt-1 w-10 h-10 text-black bg-[#D1E6B2] rounded-full font-bold flex items-center justify-center"
              >
                2
              </div>
              <svg
                class="-mt-1"
                width="2"
                height="50"
                viewBox="0 0 2 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.26599"
                  y1="2.18557e-08"
                  x2="1.26599"
                  y2="50"
                  stroke="#D1E6B2"
                />
              </svg>
              <div
                class="-mt-1 w-10 h-10 text-black bg-[#D1E6B2] rounded-full font-bold flex items-center justify-center"
              >
                3
              </div>
              <svg
                class="-mt-1"
                width="2"
                height="50"
                viewBox="0 0 2 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.26599"
                  y1="2.18557e-08"
                  x2="1.26599"
                  y2="50"
                  stroke="#D1E6B2"
                />
              </svg>
              <div
                class="-mt-1 w-10 h-10 text-black bg-[#D1E6B2] rounded-full font-bold flex items-center justify-center"
              >
                4
              </div>
            </div>

            <div>
              <div>
                <h1 class=" ">Create an account</h1>
                <p class="text-sm text-[#475467] mt-1">
                  Select a plan and create your Conver8 account to start using
                  our services
                </p>
              </div>

              <div class="mt-8">
                <h1 class=" ">WABA Configuration</h1>
                <p class="text-sm text-[#475467] mt-1">
                  Complete setup of your WABA account. You must have an existing
                  Meta Business <br />
                  account to complete this step.
                </p>
              </div>

              <div class="mt-8">
                <h1 class=" ">Bot Setup</h1>
                <p class="text-sm text-[#475467] mt-1">
                  Create an automated bot that responds to your clients who
                  reach out to you through<br />
                  WhatsApp.
                </p>
              </div>

              <div class="mt-8">
                <h1 class=" ">Good to go!</h1>
                <p class="text-sm text-[#475467] mt-1">
                  Voila! Your customer support journey is now automated and
                  ready to go!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  

  <!-- Pricing Plans for everyone-->
  <section
    class="grid mx-auto md:w-[72%] max-w-[80%] md:mt-10 mt-20  container h-auto"
  >
    <!-- Heading -->
    <div class="grid">
      <div class="text-center">
        <div>
          <h1 class="font-medium text-2xl">
            Pricing Plans for
            <span class="text-[#00927C]">
              Everyone
              <img src="public/underline.svg" class="ml-[53%]" />
            </span>
          </h1>

          <p class="text-[#475467] font-light">
            We aim to provide value for money for any type of team...
          </p>
        </div>
      </div>
    </div>
    <!-- Calculate the best plan.. -->
    <div class="mt-12 md:flex w-[90%] lg:w-[100%] justify-between">
      <div class="my-auto">
        <h1 class="text-[#101828] font-medium leading-5">
          Calculate the best plan for you
        </h1>
        <p class="text-[#667085] text-sm font-light">
          We aim to provide the best value in our pricing
        </p>
      </div>

      <div class="grid md:flex">
        <form class="text-sm text-[#475467] grid">
          <label for="number">How many people</label>
          <input
            class="border border-[#EAECF0] rounded-xl md:w-68 h-11 mt-1.5"
            type="text"
            id="fname"
            name="fname"
          />
        </form>

        <div class="md:ml-6">
          <h1 class="text-[#00927C] text-sm font-normal">
            Save 10% with yearly!
          </h1>

          <div
            class="border border-[#EAECF0] lg:w-56 flex gap-1 mt-1.5 h-11 rounded-xl p-1"
          >
            <button
                @click="state.billingCycle = 'monthly'"
      :class="state.billingCycle === 'monthly' ? activeClass : inactiveClass"
              class="duration-300 cursor-pointer text-[#475467] w-full flex justify-center hover:bg-[#2bd5bc] rounded-xl"
            >
              Monthly
            </button>

            <button
             @click="state.billingCycle = 'yearly'"
      :class="state.billingCycle === 'yearly' ? activeClass : inactiveClass"
              class="duration-300 cursor-pointer  text-[#475467] w-full  rounded-xl flex justify-center hover:bg-[#2bd5bc]"
            >
              Yearly
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Details card -->
    <div class="grid lg:grid-cols-3 gap-4  mt-6">
      <!-- container 1 -->

      <div
        class="bg-[#CDFF71] rounded-2xl grid  border border-[#EAECF0]"
      >
        <div class="grid z-10 justify-items-center relative overflow-hidden">
          <img
            src="/flower.svg"
            class="absolute opacity-10 -left-[30px]"
            style="top: calc(50% - 60px)"
          />
          <img
            src="/flower.svg"
            class="absolute opacity-10 -right-[40px]"
            style="top: calc(50% - 5px)"
          />
          <img
            src="/flower.svg"
            class="absolute opacity-10 -left-[0px]"
            style="top: calc(50% - 220px)"
          />
          <img
            src="/flower.svg"
            class="absolute opacity-10 -right-[30px]"
            style="top: calc(50% - 180px)"
          />
          <img
            src="/flower.svg"
            class="absolute opacity-10 -left-[10px]"
            style="top: calc(50% - -80px)"
          />
          <img
            src="/flower.svg"
            class="absolute opacity-10 right-[30px]"
            style="top: calc(50% - -110px)"
          />

          <img class="mt-8" src="public/flower.svg" />
          <p class="text-[#43A363] font-medium leading-8 mt-6">Personal plan</p>
          <p class="text-[#101828] text-2xl leading-12">  ${{ personalPrice }}<span>{{ personalPer }}</span></p>
          <p class="text-[#475467] leading-6">{{ billingText }}</p>
          <button
            class="w-66 mt-2 font-semibold rounded-4xl justify-center text-white bg-[#43A363] h-12 mb-4"
          >
            Pay  ${{ personalPrice }}
          </button>
        </div>

        <div class="bg-white p-8 grid md:gap-4 gap-2 text-[#475467] z-10 font-light">
          <h1 class="text-[#101828] font-normal">Features:</h1>
          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Access to all basic features
          </p>

          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Basic reporting and analytics
          </p>

          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Up to 10 individual users
          </p>

          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            20GB individual data each user
          </p>

          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Basic chart and email support
          </p>
        </div>
      </div>

      <!-- Container 2 -->

      <div
        class="bg-[#FFE299] rounded-2xl grid border border-[#EAECF0] overflow-hidden"
      >
        <div class="grid justify-items-center relative">
          <img
            src="/lightning2.svg"
            class="absolute opacity-10 -left-[20px]"
            style="top: calc(50% - 60px)"
          />
          <img
            src="/lightning2.svg"
            class="absolute opacity-10 -right-[40px]"
            style="top: calc(50% - 5px)"
          />
          <img
            src="/lightning2.svg"
            class="absolute opacity-10 -left-[0px]"
            style="top: calc(50% - 220px)"
          />
          <img
            src="/lightning2.svg"
            class="absolute opacity-10 -right-[30px]"
            style="top: calc(50% - 180px)"
          />
          <img
            src="/lightning2.svg"
            class="absolute opacity-10 -left-[10px]"
            style="top: calc(50% - -80px)"
          />
          <img
            src="/lightning2.svg"
            class="absolute opacity-10 right-[30px]"
            style="top: calc(50% - -110px)"
          />

          <img class="mt-8" src="public/lightning2.svg" />
          <p class="text-[#9C7004] font-medium leading-8 mt-6">Team plan</p>
          <p class="text-[#101828] text-2xl leading-12"> ${{ teamPrice }}<span>{{ personalPer }}</span></p>
          <p class="text-[#475467] leading-6">{{ billingText }}</p>
          <button
            class="w-66 mt-2 font-semibold rounded-4xl justify-center text-white bg-[#D89B04] h-12 mb-4"
          >
            Pay  ${{ teamPrice }}
          </button>
        </div>

        <div class="bg-white p-8 grid md:gap-4 gap-2 text-[#475467] z-10 font-light">
          <h1 class="text-[#101828] font-normal">
            Everything in Basic Plan plus:
          </h1>
          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Access to all basic features
          </p>

          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Basic reporting and analytics
          </p>

          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Up to 10 individual users
          </p>

          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            20GB individual data each user
          </p>

          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Basic chart and email support
          </p>
        </div>
      </div>

      <!-- Container 3 -->

      <div
        class="bg-[#DDE4FA] rounded-2xl grid border-2 border-[#013DFF] overflow-hidden"
      >
        <div class="grid justify-items-center relative">
          <img
            src="/item.svg"
            class="absolute opacity-10 -left-[30px]"
            style="top: calc(50% - 60px)"
          />
          <img
            src="/item.svg"
            class="absolute opacity-10 -right-[30px]"
            style="top: calc(50% - 5px)"
          />
          <img
            src="/item.svg"
            class="absolute opacity-10 -left-[0px]"
            style="top: calc(50% - 220px)"
          />
          <img
            src="/item.svg"
            class="absolute opacity-10 -right-[30px]"
            style="top: calc(50% - 200px)"
          />
          <img
            src="/item.svg"
            class="absolute opacity-10 -left-[10px]"
            style="top: calc(50% - -80px)"
          />
          <img
            src="/item.svg"
            class="absolute opacity-10 right-[30px]"
            style="top: calc(50% - -110px)"
          />

          <img class="mt-8" src="public/item.svg" />
          <p class="text-[#013DFF] font-medium leading-8 mt-6">
            Enterprise plan
          </p>
          <p class="text-[#101828] text-2xl leading-12"> ${{ enterprisePrice }}<span>{{ personalPer }}</span></p>
          <p class="text-[#475467] leading-6">{{ billingText }}</p>
          <button
            class="w-66 mt-2 font-semibold rounded-4xl justify-center text-white bg-[#013DFF] h-12 mb-4"
          >
            Pay ${{ enterprisePrice }}
          </button>
        </div>

        <div class="bg-white p-8 grid md:gap-4 gap-2 text-[#475467] z-10 font-light">
          <h1 class="text-[#101828] font-normal">
            Everything in Basic Plan plus:
          </h1>
          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Access to all basic features
          </p>

          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Basic reporting and analytics
          </p>

          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Up to 10 individual users
          </p>

          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            20GB individual data each user
          </p>

          <p class="flex gap-3 items-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6666 1L5.49992 10.1667L1.33325 6"
                stroke="#475467"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Basic chart and email support
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Faq section -->

  <section
    class="w-[96%] md:max-w-[90%]  mx-auto mt-24 lg:flex justify-between"
  >
    <!-- right side -->
    <div class="grid lg:w-[59%] mx-auto px-6">
      <div>
        <h1 class="text-[#101828] md:text-2xl text-[20px] font-medium flex">
          Frequently Asked Questions
          <img class="ml-4" src="public/smileyface.svg" />
        </h1>
        <p class="text-[#475467] font-light">
          If you have questions we have not addressed please reach out
        </p>
      </div>

      <!-- Faq item 1 -->
      <div class="mt-8">
        <h2 class="text-[#101828] md:text-lg text-base flex justify-between">
          Is there a free trial available?
          <svg
            class="cursor-pointer"
            @click="toggleAnswer('dropdown1')"
            :aria-expanded="isOpen['dropdown1']"
            v-if="isOpen"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h2>
        <p
          v-show="isOpen['dropdown1']"
          id="answer-1"
          class="font-extralight text-sm md:text-base text-[#475467]"
        >
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </p>
      </div>

      <!-- Faq item 2 -->
      <div class="md:mt-8 mt-4 border-t border-[#EAECF0]">
        <h2 class="text-[#101828] md:py-6 py-4 md:text-lg text-base flex justify-between">
          Can I change my plan later?

          <svg
            class="cursor-pointer"
            @click="toggleAnswer('dropdown2')"
            :aria-expanded="isOpen['dropdown2']"
            v-if="isOpen"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h2>
        <p
          v-show="isOpen['dropdown2']"
          id="answer-2"
          class="font-extralight text-sm md:text-base text-[#475467]"
        >
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </p>
      </div>

      <!-- Faq item 3 -->
      <div class="border-t border-[#EAECF0]">
        <h2 class="text-[#101828] md:py-6 py-4 md:text-lg text-base flex justify-between">
          What is your cancellation policy?
          <svg
            class="cursor-pointer"
            @click="toggleAnswer('dropdown3')"
            :aria-expanded="isOpen['dropdown3']"
            v-if="isOpen"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h2>
        <p
          v-show="isOpen['dropdown3']"
          id="answer-3"
          class="font-extralight text-[#475467]"
        >
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </p>
      </div>

      <!-- Faq item 4 -->
      <div class="border-t border-[#EAECF0]">
        <h2 class="text-[#101828] md:py-6 py-4 md:text-lg text-base flex justify-between">
          Can other info be addded in a invoice?
          <svg
            class="cursor-pointer"
            @click="toggleAnswer('dropdown4')"
            :aria-expanded="isOpen['dropdown4']"
            v-if="isOpen"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h2>
        <p
          v-show="isOpen['dropdown4']"
          id="answer-4"
          class="font-extralight text-sm md:text-base text-[#475467]"
        >
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </p>
      </div>

      <!-- Faq item 5 -->
      <div class="border-t border-[#EAECF0]">
        <h2 class="text-[#101828] md:py-6 py-4 md:text-lg text-base flex justify-between">
          How does billing work?
          <svg
            class="cursor-pointer"
            @click="toggleAnswer('dropdown5')"
            :aria-expanded="isOpen['dropdown5']"
            v-if="isOpen"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h2>
        <p
          v-show="isOpen['dropdown5']"
          id="answer-5"
          class="font-extralight text-sm md:text-base text-[#475467]"
        >
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </p>
      </div>

      <!-- Faq item 6 -->
      <div class="border-t border-[#EAECF0]">
        <h2 class="text-[#101828] md:py-6 py-4 md:text-lg text-base flex justify-between">
          How do I change my account e-mail?
          <svg
            class="cursor-pointer"
            @click="toggleAnswer('dropdown6')"
            :aria-expanded="isOpen['dropdown6']"
            v-if="isOpen"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h2>
        <p
          v-show="isOpen['dropdown6']"
          id="answer-6"
          class="font-extralight text-sm md:text-base text-[#475467]"
        >
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </p>
      </div>
    </div>

    <!-- left side -->
    <div class="lg:grid hidden">
      <img class="mt-20" src="public/man-calling.svg" />
      <img class="mt-6 -z-10 ml-52 absolute" src="public/sun.svg" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';

// Reactive state for dropdowns
const isOpen = reactive<Record<string, boolean>>({});

// Function to toggle dropdown visibility
const toggleAnswer = (dropdown: string) => {
  isOpen[dropdown] = !isOpen[dropdown];
};

// Reactive state for billing cycle and pricing
const state = reactive({
  billingCycle: 'yearly',
  pricing: {
    personal: {
      monthly: 10,
      yearly: 120,
    },
    team: {
      monthly: 15,
      yearly: 180,
    },
    enterprise: {
      monthly: 25,
      yearly: 300,
    },
  },
});

// Computed properties for pricing and billing
const isYearly = computed(() => state.billingCycle === 'yearly');
const personalPrice = computed(() =>
  isYearly.value ? state.pricing.personal.yearly : state.pricing.personal.monthly
);
const personalPer = computed(() => (isYearly.value ? '/year' : '/month'));
const billingText = computed(() =>
  isYearly.value ? 'Billed Annually' : 'Billed Monthly'
);
const teamPrice = computed(() =>
  isYearly.value ? state.pricing.team.yearly : state.pricing.team.monthly
);
const enterprisePrice = computed(() =>
  isYearly.value ? state.pricing.enterprise.yearly : state.pricing.enterprise.monthly
);
// Classes for active/inactive buttons
const activeClass = "bg-[#00927C] text-white";
const inactiveClass = "text-[#475467]";
</script>
