---
id: 2026-10-13-daily-infraops-briefing
title: "[2026.10.13] 글로벌 인프라 브리핑: 아마존의 데카르트(Decart) 9조 원(약 65억 달러) 인수 논의 & AWS 피지컬 AI(Physical AI) 툴체인 공개"
date: 2026-10-13
time: "05:56"
category: Daily Briefing
status: published
summary: "DAILY INFRAOPS DIGEST 글로벌 클라우드 & 데이터센터 인프라 핵심 동향 리포트 발행일: 2026년 10월 13일 | IT 인프라 아키텍트 및 엔지니어링 의사결정권자를 위한 심층 분석 📌 오늘의 3대 핵심 관전 포인트 (Key Highlights) 1. 전력망 기저부하 확보와 데이터센터 거버넌스 투명성 전환 구글이 컨스텔레이션 에너지와 손잡고"
labels:
  - AWS
  - 클라우드
  - 데이터센터
  - AI인프라
  - 인프라동향
  - 원전PPA
  - GitOps
---

<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.85; color: #1E293B; max-width: 860px; margin: 0 auto; padding: 24px 16px;">

  <!-- 리포트 헤더 -->
  <header style="border-bottom: 2px solid #E2E8F0; padding-bottom: 20px; margin-bottom: 32px;">
    <div style="display: inline-block; background-color: #0284C7; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 4px 10px; border-radius: 4px; margin-bottom: 12px; letter-spacing: 0.5px;">DAILY INFRAOPS DIGEST</div>
    <h1 style="font-size: 28px; line-height: 1.35; color: #0F172A; margin: 0 0 12px 0; font-weight: 800;">글로벌 클라우드 & 데이터센터 인프라 핵심 동향 리포트</h1>
    <p style="font-size: 15px; color: #64748B; margin: 0;">발행일: 2026년 10월 13일 | IT 인프라 아키텍트 및 엔지니어링 의사결정권자를 위한 심층 분석</p>
  </header>

  <!-- 📌 오늘의 3대 핵심 관전 포인트 -->
  <section style="background-color: #F8FAFC; border: 1px solid #CBD5E1; border-left: 6px solid #0284C7; border-radius: 8px; padding: 24px; margin-bottom: 40px;">
    <h2 style="font-size: 20px; color: #0F172A; margin: 0 0 18px 0; font-weight: 700; display: flex; align-items: center;">
      📌 오늘의 3대 핵심 관전 포인트 (Key Highlights)
    </h2>
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 6px; padding: 16px;">
        <strong style="color: #0369A1; font-size: 16px;">1. 전력망 기저부하 확보와 데이터센터 거버넌스 투명성 전환</strong>
        <p style="margin: 6px 0 0 0; font-size: 14.5px; color: #334155;">구글이 컨스텔레이션 에너지와 손잡고 PJM 전력망에 890MW 규모의 원자력 발전을 조달하기로 합의했습니다. 동시에 AWS는 지자체 대상 비공개 계약(NDA) 관행을 공식 폐지하고 5년간 10억 달러의 지역 사회 기금을 투입해 인허가 마찰을 정면 돌파하고 있습니다.</p>
      </div>
      <div style="background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 6px; padding: 16px;">
        <strong style="color: #0369A1; font-size: 16px;">2. 실리콘 내재화와 피지컬 AI(Physical AI) 툴체인 수직 통합</strong>
        <p style="margin: 6px 0 0 0; font-size: 14.5px; color: #334155;">마이크로소프트가 신형 자체 AI 가속기를 공개하며 엔비디아 의존도 분산에 속도를 내는 가운데, 아마존은 9조 원 규모의 가상환경 생성 AI 기업 데카르트 인수 협상과 함께 지능형 기계 제어용 피지컬 AI 툴체인을 전격 공개했습니다.</p>
      </div>
      <div style="background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 6px; padding: 16px;">
        <strong style="color: #0369A1; font-size: 16px;">3. 엔터프라이즈 GitOps 현대화와 물리적 인프라의 복원력 과제</strong>
        <p style="margin: 6px 0 0 0; font-size: 14.5px; color: #334155;">국내 솔트웨어의 케이넷 클라우드 전환 사례에서 나타난 EKS·테라폼·아르고 CD 기반 표준화 흐름과, 러시아 얀덱스 데이터센터 3곳 피격에 따른 복구 지연(6개월) 사례는 소프트웨어 자동화와 지정학적 물리 재해복구(DR)의 중요성을 극명하게 대조시킵니다.</p>
      </div>
    </div>
  </section>

  <!-- 🔍 핵심 테마 1: 전력 수급 및 거버넌스 -->
  <section style="margin-bottom: 40px;">
    <h2 style="font-size: 22px; color: #0F172A; border-bottom: 2px solid #0284C7; padding-bottom: 8px; margin-bottom: 20px;">
      1. [전력 인프라 & 거버넌스] 890MW 원전 PPA와 데이터센터 인허가 투명성 혁신
    </h2>
    <p style="font-size: 15.5px; margin-bottom: 16px;">
      인공지능(AI) 클러스터 가동을 위한 고전력 인프라 확보 경쟁이 단순 재생에너지 PPA(전력구매계약)를 넘어 24시간 연속 가동이 보장되는 <strong>원자력 기저부하(Baseload Power) 확보</strong>와 <strong>지역사회 수용성 확보</strong>라는 두 가지 축으로 재편되고 있습니다.
    </p>
    <p style="font-size: 15.5px; margin-bottom: 16px;">
      구글(Google)과 미국 유틸리티 공급사 컨스텔레이션 에너지(Constellation Energy)의 최근 계약은 이러한 산업적 전환을 명확히 보여줍니다. 양사는 미국 최대 전력망 운영기구인 PJM 연계(Interconnection) 계통에 <strong>총 890MW(메가와트) 규모의 원자력 발전 용량을 공급</strong>하는 대형 계약을 체결했습니다. 기상 여건에 따라 발전량이 급변하는 태양광 및 풍력 발전만으로는 99.999% 가용성을 요구하는 초대형 AI 데이터센터의 전력 계통 안정을 담보하기 어렵다는 한계를 반영한 결정입니다. 이번 890MW 공급 계약은 데이터센터 인근 송전망 혼잡(Grid Congestion)을 완화하고, PJM 관할 지역 내 대규모 컴퓨팅 랙에 무탄소 전력을 안정적으로 공급하는 핵심 기저 역할을 수행할 것으로 분석됩니다.
    </p>
    <blockquote style="background-color: #F1F5F9; border-left: 4px solid #475569; margin: 20px 0; padding: 14px 18px; font-size: 14.5px; color: #334155;">
      <strong>전력 계통 관점의 시사점:</strong> 메가와트(MW) 단위에서 기가와트(GW) 단위로 격상되는 차세대 하이퍼스케일 부지 선정 시, 지역 유틸리티 기업과의 사전 원전 PPA 체결 여부가 부지 타당성 조사의 최우선 선결 지표로 자리 잡고 있습니다.
    </blockquote>
    <p style="font-size: 15.5px; margin-bottom: 16px;">
      한편, 인프라 확장의 또 다른 병목으로 지목되어 온 지자체 인허가 규제와 주민 반발에 대해서는 아마존웹서비스(AWS)가 선제적인 정책 전환을 단행했습니다. AWS는 데이터센터 신규 건설 및 증설 시 지방정부 및 공공기관과 체결하던 <strong>비공개 협약(NDA)을 전면 중단</strong>한다고 선언했습니다. 그간 하이퍼스케일러들은 전력 수전 용량과 공업용수 소비량 등의 세부 지표를 NDA로 보호해왔으나, 이것이 지역 주민과의 갈등을 유발하고 환경 인허가를 수개월 이상 지연시키는 원인으로 작용해왔습니다.
    </p>
    <p style="font-size: 15.5px; margin-bottom: 16px;">
      AWS는 불투명한 관행을 철폐하는 대신, <strong>'빌트 투게더(Built Together)'</strong> 이니셔티브를 통해 향후 5년간 데이터센터 유치 지역에 <strong>10억 달러(한화 약 1조 3,500억 원 이상) 규모의 지역 사회 직접 투자</strong>를 병행하겠다고 발표했습니다. 이는 전력·용수 소비량 데이터를 선제적으로 투명하게 공개함으로써 사회적 비용을 줄이고, 기금 투자를 통해 인허가 리드타임을 단축하려는 현실적인 거버넌스 최적화 전략으로 평가됩니다.
    </p>
  </section>

  <!-- 🔍 핵심 테마 2: AI 가속기 및 컴퓨팅 생태계 -->
  <section style="margin-bottom: 40px;">
    <h2 style="font-size: 22px; color: #0F172A; border-bottom: 2px solid #0284C7; padding-bottom: 8px; margin-bottom: 20px;">
      2. [가속 컴퓨팅 & 툴체인] 커스텀 실리콘 내재화와 피지컬 AI(Physical AI)의 태동
    </h2>
    <p style="font-size: 15.5px; margin-bottom: 16px;">
      AI 가속기 시장에서는 엔비디아(Nvidia) 중심의 하드웨어 단일 공급망 종속에서 벗어나려는 하이퍼스케일러들의 자체 칩(Custom Silicon) 배치와, AI 적용 대상을 물리 세계로 확장하는 차세대 플랫폼 전략이 동시에 가시화되고 있습니다.
    </p>
    <p style="font-size: 15.5px; margin-bottom: 16px;">
      마이크로소프트는 외신 보도를 통해 <strong>엔비디아 GPU 의존도를 대폭 완화할 수 있는 신규 자체 개발 AI 가속기</strong>의 성능과 배치 계획을 공개했습니다. 클라우드 서비스 제공사(CSP) 관점에서 엔비디아의 B200, H100 계열 가속기는 고성능을 보장하지만, 극심한 조달 리드타임과 랙당 수십 킬로와트(kW)에 달하는 전력 밀도, 그리고 높은 구매 비용으로 인해 인프라 마진을 제약하는 주요 요인이었습니다. 마이크로소프트의 자체 실리콘 확장은 자사 애저(Azure) 인프라 내 대규모 추론 워크로드와 경량 파인튜닝 워크로드를 자체 아키텍처로 흡수함으로써, 공급망 리스크 분산과 랙 레벨 배전 효율 개선을 동시에 달성하려는 구조적 조치입니다.
    </p>
    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 18px; margin: 20px 0;">
      <h3 style="font-size: 16.5px; color: #0F172A; margin: 0 0 10px 0;">⚙️ 물리 세계 모델링을 향한 인프라 투자 흐름</h3>
      <ul style="margin: 0; padding-left: 20px; font-size: 14.5px; color: #334155; line-height: 1.8;">
        <li><strong>아마존의 데카르트(Decart) 9조 원(약 65억 달러) 인수 논의:</strong> 가상환경 생성 및 실시간 세계 시뮬레이션 기술을 확보하여 자사 물류 로보틱스 및 클라우드 물리 시뮬레이션 환경에 직접 접목하려는 목적입니다.</li>
        <li><strong>AWS 피지컬 AI(Physical AI) 툴체인 공개:</strong> 센서 데이터 수집, 3D 가상 시뮬레이션, 지능형 엣지 머신 제어 런타임을 엔드투엔드로 연결하는 전용 개발 도구 모음을 론칭했습니다.</li>
        <li><strong>엔비디아와 아마존의 유망 스타트업 투자 경합:</strong> 기반 인프라 장악을 넘어 차세대 공간 컴퓨팅 및 로보틱스 지능 모델을 선점하기 위한 빅테크 자본 투입이 본격화되고 있습니다.</li>
      </ul>
    </div>
    <p style="font-size: 15.5px; margin-bottom: 16px;">
      특히 아마존의 데카르트 인수 검토와 AWS의 '피지컬 AI 툴체인' 발표는 AI 모델의 무게중심이 대규모 언어 모델(LLM)에서 실제 물리 법칙을 이해하고 제어하는 <strong>월드 모델(World Model) 및 지능형 기계(Robotics)</strong>로 전환되고 있음을 시사합니다. 이를 안정적으로 서빙하기 위해서는 초저지연 네트워크(Ultra-low Latency Network), 고속 인터커넥트, 그리고 분산 엣지-중앙 클라우드 간 실시간 동기화 인프라가 필수적이므로, 백본 네트워크 엔지니어링의 중요성이 한층 증대될 것으로 관측됩니다.
    </p>
  </section>

  <!-- 🔍 핵심 테마 3: 인프라 현대화 & 복원력 -->
  <section style="margin-bottom: 40px;">
    <h2 style="font-size: 22px; color: #0F172A; border-bottom: 2px solid #0284C7; padding-bottom: 8px; margin-bottom: 20px;">
      3. [클라우드 아키텍처 & 복원력] GitOps 기반 인프라 현대화와 물리적 DR 전략의 재정비
    </h2>
    <p style="font-size: 15.5px; margin-bottom: 16px;">
      클라우드 운영 자동화와 시스템 현대화는 소프트웨어 계층의 표준화를 중심으로 성숙도를 높여가고 있는 반면, 인프라의 물리적 계층에서는 지정학적 위협과 재해에 대응하는 극단적 복원력(Resilience) 설계가 핵심 과제로 부상했습니다.
    </p>
    <p style="font-size: 15.5px; margin-bottom: 16px;">
      국내 시장에서는 솔트웨어가 주도한 케이넷의 AWS 클라우드 전환 사례가 대표적인 <strong>클라우드 네이티브 현대화 모델</strong>을 제시했습니다. 2015년부터 운영되던 기존 레거시 클라우드 환경의 기술 지원 한계와 수작업 의존도를 탈피하기 위해 다음과 같은 핵심 인프라 스택이 전면 적용되었습니다:
    </p>
    <ul style="padding-left: 20px; font-size: 15px; margin-bottom: 18px;">
      <li style="margin-bottom: 8px;"><strong>아마존 EKS(Elastic Kubernetes Service):</strong> 가상머신(VM) 단위 개별 관리 구조에서 컨테이너 기반 오케스트레이션으로 전환하여 고가용성 클러스터 운영 및 유연한 오토스케일링 기반 확보</li>
      <li style="margin-bottom: 8px;"><strong>테라폼(Terraform) 기반 IaC(코드형 인프라):</strong> 인프라 형상 정보를 코드로 선언하여 환경 구성의 일관성을 보장하고 상태 드리프트(Configuration Drift) 방지</li>
      <li style="margin-bottom: 8px;"><strong>아르고 CD(Argo CD) 기반 GitOps:</strong> 깃(Git) 단일 진실 공급원(Single Source of Truth)을 기준으로 클러스터 배포 상태를 자동 동기화하여 운영 가시성 확보 및 수작업 배포 실수 원천 차단</li>
    </ul>
    <p style="font-size: 15.5px; margin-bottom: 16px;">
      이러한 소프트웨어 계층의 자동화 고도화와 뚜렷하게 대조되는 사례가 동유럽에서 발생했습니다. '러시아의 구글'로 불리는 기술 대기업 <strong>얀덱스(Yandex)의 데이터센터 3곳이 물리적 공습으로 피격</strong>당하며 대규모 가동 중단이 발생했습니다. 얀덱스 측 발표에 따르면 손상된 물리 설비와 네트워크 복구에 최소 6개월 이상이 소요될 것으로 확인되었습니다.
    </p>
    <blockquote style="background-color: #FEF2F2; border-left: 4px solid #EF4444; margin: 20px 0; padding: 14px 18px; font-size: 14.5px; color: #991B1B;">
      <strong>엔지니어링 리스크 분석:</strong> 단일 물리 리전 내 다중 가용영역(Multi-AZ) 분산만으로는 군사적 타격, 물리적 화재, 송전망 붕괴와 같은 국지적 재난에 대처할 수 없습니다. 핵심 서비스의 생존성을 보장하기 위해서는 <strong>완전 격리된 원격 리전 간 액티브-액티브(Active-Active) 또는 액티브-스탠바이(Active-Standby) 재해복구(DR)</strong> 및 BGP Anycast 기반 동적 트래픽 우회 체계가 필수적입니다.
    </blockquote>
    <p style="font-size: 15.5px; margin-bottom: 16px;">
      얀덱스 사태는 클라우드 아키텍트들에게 데이터 무결성과 백업 테이프 보관뿐 아니라, 전력 인입선·백본 광케이블의 물리적 이중화 및 타국가 리전으로의 지리적 데이터 복제가 더 이상 이론적 시나리오가 아닌 필수 비즈니스 연속성 계획(BCP)임을 상기시켜 줍니다.
    </p>
  </section>

  <!-- 💡 엔지니어링 종합 제언 -->
  <section style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 22px; margin-bottom: 40px;">
    <h3 style="font-size: 18px; color: #0F172A; margin: 0 0 14px 0; font-weight: 700;">💡 인프라 아키텍트 및 엔지니어를 위한 종합 제언</h3>
    <ol style="margin: 0; padding-left: 20px; font-size: 15px; color: #334155; line-height: 1.8;">
      <li style="margin-bottom: 10px;"><strong>워크로드 성격에 따른 가속 하드웨어 티어링:</strong> 무조건적인 고비용 하이엔드 GPU 의존에서 벗어나, 추론 워크로드에는 CSP의 자체 개발 실리콘이나 최적화 칩셋을 적극 검토하여 TCO 절감과 전력 효율을 도모해야 합니다.</li>
      <li style="margin-bottom: 10px;"><strong>GitOps와 선언적 인프라 표준화의 조기 안착:</strong> 인프라 프로비저닝(Terraform)과 배포 제어(Argo CD)를 코드로 일원화하여 휴먼 에러를 방지하고 클러스터 확장 리드타임을 최소화하십시오.</li>
      <li style="margin-bottom: 0;"><strong>지정학적·물리적 리스크를 고려한 지리적 DR 재검토:</strong> 단일 상면 및 단일 데이터센터 캠퍼스 의존도를 재측정하고, 물리적 파괴 수준의 대형 재난 발생 시에도 BGP 라우팅 변경 및 원격 복제가 원활히 구동되는지 주기적인 카오스 엔지니어링 훈련을 수행해야 합니다.</li>
    </ol>
  </section>

  <!-- 🔗 오늘의 주요 큐레이션 링크 -->
  <section style="border-top: 1px solid #CBD5E1; padding-top: 24px;">
    <h3 style="font-size: 18px; color: #0F172A; margin: 0 0 16px 0; font-weight: 700;">🔗 오늘의 주요 큐레이션 링크 (Curated Sources)</h3>
    <ul style="list-style-type: none; padding-left: 0; margin: 0; font-size: 14px;">
      <li style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #E2E8F0;">
        <span style="display: inline-block; width: 110px; font-weight: 600; color: #64748B;">[W.Media]</span>
        <a href="https://news.google.com/rss/articles/CBMilgFBVV95cUxPUDVYZF95TGpNcW53eTcyQmluOXozWFpnY1RMVXlzZGhCbXVYOW4zaF9ldnlMdnVVTzBPZUxZbkVoZDVYb1JxbWFBTWI4WVUzMVhwZ0otSjlacmZOQTZYUFBQUGlwWmtSeXhneVNoX0FwR3lLaS1OWThNeVI4eEwwUjBaUk9hZWNMX0ZIaUp2UGxWekd4THc?oc=5" target="_blank" rel="noopener noreferrer" style="color: #0284C7; text-decoration: none; font-weight: 500;">Google and Constellation sign nuclear power deal to add 890 MW to PJM grid</a>
      </li>
      <li style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #E2E8F0;">
        <span style="display: inline-block; width: 110px; font-weight: 600; color: #64748B;">[뉴스N연합]</span>
        <a href="https://news.google.com/rss/articles/CBMiSkFVX3lxTE1GUXFsYTE1OXpVRy1BWGFKM3pwWDJQSHZFZTZfbjI0bDZfRnl0cWlVVVZ2bVVQck1XNGo4QWU5V3ROQk1hMmkzTUlB?oc=5" target="_blank" rel="noopener noreferrer" style="color: #0284C7; text-decoration: none; font-weight: 500;">AWS, 데이터센터 관련 정부 기관 NDA 중단 선언…'Built Together'로 5년간 10억 달러 지역 투자 병행</a>
      </li>
      <li style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #E2E8F0;">
        <span style="display: inline-block; width: 110px; font-weight: 600; color: #64748B;">[The Verge]</span>
        <a href="https://news.google.com/rss/articles/CBMiigFBVV95cUxQMFNMVlVUZmNza0NDelpIV21DellOcjRTcXFTUjQ5ZElIVUYxQ0I3SmJDa29wdldwUk1vYzZFUHE5aldoaXV6Y0dwb05WZ3RoV3VKUWxzaU1NY3dCSkMwRl92T1dBeTlUcklTUEJIYlpaQzJ4OW1kbU00VG5yc1pCaUQ2Q3RxekVsd0E?oc=5" target="_blank" rel="noopener noreferrer" style="color: #0284C7; text-decoration: none; font-weight: 500;">Microsoft’s new AI chip makes it less reliant on Nvidia’s GPUs</a>
      </li>
      <li style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #E2E8F0;">
        <span style="display: inline-block; width: 110px; font-weight: 600; color: #64748B;">[연합뉴스]</span>
        <a href="https://news.google.com/rss/articles/CBMiYEFVX3lxTE0wTEQ1cUozWXJSTjhKenh5RjNCOHJVa3Y0V01kaHV2aVloVUlwc1lGbml3aGhUaExHcVdnRmNta3hLUDRhZGUzME5VQlpaVWxrakg5U2Jzai1GTHZhczFXM9IBYEFVX3lxTE0wTEQ1cUozWXJSTjhKenh5RjNCOHJVa3Y0V01kaHV2aVloVUlwc1lGbml3aGhUaExHcVdnRmNta3hLUDRhZGUzME5VQlpaVWxrakg5U2Jzai1GTHZhczFXMw?oc=5" target="_blank" rel="noopener noreferrer" style="color: #0284C7; text-decoration: none; font-weight: 500;">아마존, 가상환경 생성 AI 개발사 데카르트 9조원에 인수 논의</a>
      </li>
      <li style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #E2E8F0;">
        <span style="display: inline-block; width: 110px; font-weight: 600; color: #64748B;">[이데일리]</span>
        <a href="https://news.google.com/rss/articles/CBMigAFBVV95cUxPX0tSV0VnY25aRXZIQmV1VkJ6TXBJRHp3aHZsb2N0VnNXekMwalVaam5XREZ3ZWVXNktOWjVJQ29aVzBZejJWQWktUWdxMjlKSlVHQnRvTkliOFlwRHFRdW9ScmZKSlRCOElVV0xyUDlFZ0dxSUZMNjlxVmtnVmF0ZA?oc=5" target="_blank" rel="noopener noreferrer" style="color: #0284C7; text-decoration: none; font-weight: 500;">AWS, '지능형 기계' 개발용 피지컬 AI 툴체인 공개</a>
      </li>
      <li style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #E2E8F0;">
        <span style="display: inline-block; width: 110px; font-weight: 600; color: #64748B;">[지디넷코리아]</span>
        <a href="https://n.news.naver.com/mnews/article/092/0002440602" target="_blank" rel="noopener noreferrer" style="color: #0284C7; text-decoration: none; font-weight: 500;">솔트웨어, 케이넷 AWS 전환·클라우드 네이티브 구축 지원</a>
      </li>
      <li style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #E2E8F0;">
        <span style="display: inline-block; width: 110px; font-weight: 600; color: #64748B;">[뉴스1]</span>
        <a href="https://news.google.com/rss/articles/CBMiU0FVX3lxTFBndjAtQjd2RnBaNWJyNTNEZ1NHdXVMNVc3LW1RMFlSWkdXZjh6VkVaNEVlS3lPNXZsMnA3WER4VmctYVM3NmMtcXNDT2FSYmdUOWh3?oc=5" target="_blank" rel="noopener noreferrer" style="color: #0284C7; text-decoration: none; font-weight: 500;">'러시아판 구글' 얀덱스 데이터센터 3곳 피격…"복구에 6개월"</a>
      </li>
      <li style="margin-bottom: 0;">
        <span style="display: inline-block; width: 110px; font-weight: 600; color: #64748B;">[CNBC]</span>
        <a href="https://news.google.com/rss/articles/CBMingFBVV95cUxQZ3ZTd1JwbXJaNjZ5OGNCTzRqNEJvc3hmOGVmVHZGalplaGk2blB4MnlGVDlqSElQclMxc0ptSzNHYkE4NTBpOUJIV0Nob3FfbDhlUmFoQ2F2aGFWWXBxamxIM3JPOWRHd0cyVTlta0FlRGktdzVPTmdVUVplNVB1Zks4ZkNOZDF0SkUydmRkRDZ6T0pGN3UwVGxoeGY3UQ?oc=5" target="_blank" rel="noopener noreferrer" style="color: #0284C7; text-decoration: none; font-weight: 500;">Amazon and Nvidia considering AI startup deals: Reports</a>
      </li>
    </ul>
  </section>

</div>