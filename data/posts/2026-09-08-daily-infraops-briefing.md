---
id: 2026-09-08-daily-infraops-briefing
title: "[2026.09.08] 오늘의 글로벌 클라우드 & 데이터센터 인프라 핵심 동향 브리핑"
date: 2026-09-08
time: "06:11"
category: Daily Briefing
status: published
summary: "Daily InfraOps Digest 2026년 9월 8일 브리핑 글로벌 AI 클라우드 100조 원대 약정 경쟁과 차세대 인프라 생태계 재편 초대형 컴퓨팅 파이프라인 장기 선점, 에너지 기업과의 20년 PPA, 고효율 폐루프 냉각 및 모듈러 공법을 둘러싼 엔지니어링 쟁점 분석 📌 오늘의 3대 핵심 관전 포인트 (Key Highlights) 앤트로픽의 1,"
labels:
  - AWS
  - 마이크로소프트
  - 데이터센터
  - AI인프라
  - 수랭식냉각
  - 전력망
  - PPA
---

<div style='font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.85; color: #1E293B; word-break: keep-all; padding: 12px 4px;'>

  <!-- 헤더 영역 -->
  <header style='border-bottom: 2px solid #E2E8F0; padding-bottom: 20px; margin-bottom: 32px;'>
    <div style='display: flex; align-items: center; gap: 8px; margin-bottom: 8px;'>
      <span style='background-color: #2563EB; color: #FFFFFF; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase;'>Daily InfraOps Digest</span>
      <span style='color: #64748B; font-size: 0.875rem;'>2026년 9월 8일 브리핑</span>
    </div>
    <h1 style='font-size: 1.85rem; font-weight: 800; color: #0F172A; line-height: 1.35; margin: 0 0 12px 0;'>글로벌 AI 클라우드 100조 원대 약정 경쟁과 차세대 인프라 생태계 재편</h1>
    <p style='color: #475569; font-size: 1rem; margin: 0;'>초대형 컴퓨팅 파이프라인 장기 선점, 에너지 기업과의 20년 PPA, 고효율 폐루프 냉각 및 모듈러 공법을 둘러싼 엔지니어링 쟁점 분석</p>
  </header>

  <!-- 📌 오늘의 3대 핵심 관전 포인트 (Key Highlights) -->
  <section style='background-color: #F8FAFC; border: 1px solid #CBD5E1; border-left: 6px solid #2563EB; border-radius: 8px; padding: 24px; margin-bottom: 40px;'>
    <h2 style='font-size: 1.25rem; font-weight: 700; color: #1E3A8A; margin: 0 0 16px 0; display: flex; align-items: center; gap: 8px;'>
      <span>📌</span> 오늘의 3대 핵심 관전 포인트 (Key Highlights)
    </h2>
    <ul style='margin: 0; padding-left: 20px; color: #334155; font-size: 0.975rem;'>
      <li style='margin-bottom: 12px;'>
        <strong>앤트로픽의 1,000억 달러(약 135조 원) AWS 컴퓨팅 약정:</strong> 기업공개(IPO)를 준비하는 앤트로픽이 아마존 웹 서비스(AWS)에 사상 최대 규모의 지출을 약속하며, 맞춤형 가속기(Trainium) 및 차세대 GPU 클러스터 용량을 초장기로 선점하는 초대형 파이프라인 계약을 공식화했습니다.
      </li>
      <li style='margin-bottom: 12px;'>
        <strong>빅테크와 에너지 대기업의 초장기 결합 (셰브론-MS 20년 PPA):</strong> 텍사스 데이터센터 가동을 위해 마이크로소프트가 셰브론과 20년 전력구매계약(PPA)을 체결했습니다. 재생에너지 변동성을 보완하고 24/7 무중단 기저부하(Baseload)를 확보하려는 인프라 전략이 전면에 부상했습니다.
      </li>
      <li>
        <strong>자원 제약 돌파를 위한 냉각(WUE) 혁신 및 모듈러(Prefab) 시공 가속:</strong> 엔비디아와 마이크로소프트가 폐루프 직접 수랭식을 통해 용수 소모를 최소화하는 기술 표준을 제시한 가운데, 국내에서는 GS건설과 LG유플러스가 모듈러 공법을 통해 AI 데이터센터의 준공 리드타임을 대폭 단축하는 실질적인 엔지니어링 협업에 착수했습니다.
      </li>
    </ul>
  </section>

  <!-- 테마 섹션 1 -->
  <section style='margin-bottom: 44px;'>
    <h2 style='font-size: 1.45rem; font-weight: 700; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px; margin-bottom: 18px;'>
      1. 앤트로픽의 1,000억 달러 AWS 클라우드 약정: AI 컴퓨팅 락인과 오프밸런스 인프라 동맹
    </h2>
    <p style='margin-bottom: 14px;'>
      앤트로픽(Anthropic)이 아마존 웹 서비스(AWS)를 대상으로 1,000억 달러(한화 약 135조 원)에 달하는 대규모 인프라 지출을 공식 약정(Commitment)한 사실이 IPO 증권신고서 준비 과정에서 구체화되었습니다. 이는 단일 인공지능 연구 기업이 클라우드 서비스 제공업체(CSP)와 맺은 계약 중 사상 최대 규모로, 생성형 AI 파운데이션 모델 개발사가 직면한 연산 용량 확보전이 전례 없는 규모의 자본 집약적 단계로 진입했음을 보여줍니다.
    </p>
    <p style='margin-bottom: 14px;'>
      인프라 아키텍처 관점에서 이번 대규모 약정은 단순한 범용 가상머신(EC2) 임대가 아닙니다. 앤트로픽의 주력 모델인 클로드(Claude) 차세대 버전을 훈련하고 글로벌 실시간 추론을 처리하기 위해, 수만 노드 단위로 상호 연결된 울트라클러스터(UltraClusters) 및 AWS의 자체 가속기인 트레니움(AWS Trainium) 전용 인프라를 수년 이상 선점하는 계약입니다. 초고속 인터커넥트 패브릭(EFA, Elastic Fabric Adapter)과 페타비트급 백본 네트워크, 전력 용량이 사전에 완비된 전용 팟(Dedicated Pods)을 고정적으로 배정받는 구조가 전제됩니다.
    </p>
    <blockquote style='margin: 18px 0; padding: 14px 20px; background-color: #F1F5F9; border-left: 4px solid #3B82F6; font-style: normal; color: #334155;'>
      <strong>클라우드 인프라 전략 분석:</strong> 이번 계약은 하이퍼스케일러의 자본적 지출(CapEx) 구조와 AI 스타트업의 운영비용(OpEx) 모델이 완벽하게 결합된 형태입니다. AWS는 조 단위 전력 및 데이터센터 증설에 따른 대규모 선투자 비용을 회수할 수 있는 장기 매출 파이프라인을 확정 짓고, 앤트로픽은 글로벌 GPU 부족과 데이터센터 상면 병목 속에서 안정적인 연산 기지를 확보함으로써 IPO 시장에서 모델 개발 역량의 연속성을 입증하려는 전략으로 분석됩니다.
    </blockquote>
    <p>
      또한 업계에서는 이번 계약이 엔비디아 의존도를 낮추고 자체 실리콘 생태계를 안착시키려는 AWS의 하드웨어 다변화 전략과도 맞물려 있다고 평가합니다. 앤트로픽이 트레니움 아키텍처에 최적화된 컴파일러 및 커널 라이브러리를 공동 튜닝하고 대규모 워크로드를 실제 구동함으로써, AWS 차세대 AI 인프라의 TCO 경쟁력을 시장에 입증하는 핵심 레퍼런스가 될 것으로 전망됩니다.
    </p>
  </section>

  <!-- 테마 섹션 2 -->
  <section style='margin-bottom: 44px;'>
    <h2 style='font-size: 1.45rem; font-weight: 700; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px; margin-bottom: 18px;'>
      2. 셰브론과 마이크로소프트의 20년 PPA 체결: 텍사스 전력망 병목과 '기저부하 확보전'
    </h2>
    <p style='margin-bottom: 14px;'>
      마이크로소프트(Microsoft)가 미국의 주요 석유·가스 에너지 기업인 셰브론(Chevron)과 텍사스 지역 데이터센터에 장기 전력을 공급하기 위한 20년 전력구매계약(PPA, Power Purchase Agreement)을 체결했습니다. 글로벌 빅테크가 전통 에너지 메이저와 수십 년 단위의 물리적 전력 파트너십을 맺은 것은 AI 데이터센터의 전력 소모량이 단기적인 분산 전원 수준을 넘어 국가 기간 전력망에 필적하는 규모로 확대되었음을 시사합니다.
    </p>
    <p style='margin-bottom: 14px;'>
      텍사스 전력망(ERCOT)은 풍력과 태양광 등 신재생에너지 설치 용량이 풍부하지만, 기상 악화 시 급격한 발전량 변동성과 송배전망 혼잡(Congestion)으로 인해 전력 수급 불안정성이 상존하는 지역입니다. 기가와트(GW)급으로 급증하는 대규모 AI 데이터센터 클러스터는 연중 99.999% 무중단 가동이 가능한 '확정적 기저부하(Firm Baseload Power)'를 요구합니다. 간헐성이 존재하는 재생에너지만으로는 연속 연산 작업을 수행하는 초대형 훈련 클러스터를 지탱하기 어렵다는 현실적 제약이 작용했습니다.
    </p>
    <p style='margin-bottom: 14px;'>
      이번 20년 계약은 셰브론이 보유한 천연가스 자산, 고효율 열병합 복합화력 발전 인프라, 그리고 탄소 포집·활용·저장(CCUS) 프로젝트를 결합하여 데이터센터 인근에서 직접 안정적인 전력을 공급하는 구도를 취하고 있습니다. 전력 계통망(Grid) 연결 대기 시간이 수년 이상 지연되는 상황에서, 송전망을 통하지 않고 발전 시설과 데이터센터를 직접 연계하는 '비하인드 더 미터(Behind-the-Meter)' 모델 또는 직통 선로 구축을 통해 전력 인입 기간을 획기적으로 단축하려는 기술적 해법이 포함되어 있습니다.
    </p>
    <p>
      결과적으로 빅테크의 전력 조달 공식은 과거 친환경 재생에너지 인증서(REC) 확보 중심의 가상 PPA(VPPA)에서 탈피하여, 장기 가격 안정성과 24/7 물리적 가동을 동시 보장하는 하이브리드 전력 조달 체계로 빠르게 재편되고 있습니다.
    </p>
  </section>

  <!-- 테마 섹션 3 -->
  <section style='margin-bottom: 44px;'>
    <h2 style='font-size: 1.45rem; font-weight: 700; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px; margin-bottom: 18px;'>
      3. 용수 소비(WUE) 제로화와 모듈러 공법: 차세대 AI 인프라의 환경성 및 시공 속도 혁신
    </h2>
    <p style='margin-bottom: 14px;'>
      AI 데이터센터의 급격한 확장은 극심한 전력난뿐만 아니라 대규모 냉각수 증발에 따른 지역 사회와의 '물 분쟁'이라는 환경적 난제에 직면해 왔습니다. 이에 대해 엔비디아(NVIDIA)와 마이크로소프트는 고집적 AI 데이터센터가 더 이상 과도한 물을 소비하지 않는 구조로 진화하고 있음을 공식 발표했습니다.
    </p>
    <p style='margin-bottom: 14px;'>
      전통적인 수냉식 냉각탑(Evaporative Cooling Tower)은 막대한 수분을 공기 중으로 증발시켜 열을 방출하는 방식으로 인해 심각한 용수 사용 비효율을 초래했습니다. 그러나 차세대 고밀도 AI 랙(Rack당 40kW~120kW급) 체계에서는 냉각수가 외부로 방출되지 않고 밀폐된 배관 내부를 순환하는 <strong>폐루프 직접 칩 냉각(Closed-loop Direct-to-Chip Liquid Cooling)</strong> 기술이 표준으로 자리잡고 있습니다. 외부 열교환기에는 증발식 대신 건식 냉각기(Dry Cooler) 및 단열 냉각(Adiabatic Cooling) 시스템을 결합하여, 연간 수자원 사용 효율(WUE, Water Usage Effectiveness)을 거의 제로 수준에 가깝게 낮추는 기술적 성과가 가시화되고 있습니다.
    </p>
    <div style='background-color: #F8FAFC; border-radius: 6px; padding: 18px; margin: 18px 0; border: 1px solid #E2E8F0;'>
      <h3 style='font-size: 1.1rem; font-weight: 700; color: #1E293B; margin: 0 0 10px 0;'>국내 인프라 건설 지형의 변화: 모듈러(Prefab) 시공과 비수도권 분산</h3>
      <p style='font-size: 0.95rem; margin-bottom: 10px;'>
        기술적 발전과 더불어 국내 데이터센터 구축 현장에서도 공기 단축과 부지 다변화를 위한 실질적인 전환이 일어나고 있습니다. GS건설과 LG유플러스는 공장에서 전기실, 냉각 배관 모듈, 공조 유닛을 사전 제작한 후 현장에서 조립하는 <strong>프리팹 모듈러(Prefabricated Modular)</strong> 공법을 AI 데이터센터에 본격 도입하기로 합의했습니다.
      </p>
      <p style='font-size: 0.95rem; margin: 0;'>
        전통적인 콘크리트 타설 공법 대비 시공 기간을 25% 이상 단축할 수 있는 모듈러 기술은 급변하는 AI 가속기 출시 주기에 맞춰 인프라를 적기에 공급할 수 있는 핵심 해법으로 평가받습니다. 동시에 강원도 원주시(KT 유치 협의)와 춘천시(신세계 유치 협의) 등 지자체들이 수도권 전력 계통 포화 규제에 대응하여 소양강 냉수열 및 풍부한 수력·신재생 자원을 앞세워 데이터센터를 유치하려는 움직임과 결합하면서, 국내 데이터센터의 지리적 분산과 시공 패러다임 혁신이 가속화되고 있습니다.
      </p>
    </div>
  </section>

  <!-- 테마 섹션 4 -->
  <section style='margin-bottom: 44px;'>
    <h2 style='font-size: 1.45rem; font-weight: 700; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px; margin-bottom: 18px;'>
      4. 데이터 엔지니어링 세대교체: Amazon Mechanical Turk의 퇴장과 분산 NoSQL 현대화
    </h2>
    <p style='margin-bottom: 14px;'>
      아마존이 지난 2005년 출시 이후 20년 넘게 글로벌 크라우드소싱의 대명사로 군림했던 <strong>기계적 터크(Amazon Mechanical Turk, mTurk)</strong>의 최종 서비스 종료를 선언했습니다. 이는 인공지능 데이터 전처리 및 모델 학습 파이프라인의 구조적 변화를 알리는 상징적인 사건입니다.
    </p>
    <p style='margin-bottom: 14px;'>
      mTurk는 다수의 저임금 작업자가 이미지 라벨링, 텍스트 분류, 간단한 설문 응답 등을 수행하던 '인간 노동 기반의 마이크로태스크' 플랫폼이었습니다. 그러나 최근 수년간 초거대 언어모델(LLM)이 자체적으로 양질의 합성 데이터(Synthetic Data)를 생성하고 레이블을 교차 검증하는 역량을 갖추게 되었고, 인간 개입 영역 또한 단순 작업을 넘어 도메인 전문 지식 기반의 인간 피드백 강화학습(RLHF)으로 상향 이동하면서 기존 크라우드소싱 모델의 경제성과 품질 경쟁력이 급격히 상실되었습니다. mTurk의 종료는 AI 데이터 생태계가 자동화된 알고리즘 파이프라인으로 완전히 재편되었음을 공식화한 셈입니다.
    </p>
    <p style='margin-bottom: 14px;'>
      한편, 애플리케이션 계층에서는 실시간 데이터 트래픽을 감당하기 위한 분산 데이터베이스 아키텍처 고도화가 활발히 전개되고 있습니다. 채널코퍼레이션이 공개한 Amazon DynamoDB 현대화 여정 3부는 대규모 고객 인터랙션 워크로드에서 관계형 데이터베이스(RDBMS)의 쓰기 병목과 수직 확장(Scale-up) 한계를 극복하기 위해 완전 관리형 NoSQL을 채택한 구조적 사례를 제시합니다.
    </p>
    <p>
      핫 파티션(Hot Partition) 현상을 방지하기 위한 정교한 파티션 키 해싱 전략, 희소 보조 인덱스(Sparse GSI)를 통한 인덱싱 스토리지 비용 최적화, 그리고 이벤트 드리븐 아키텍처(DynamoDB Streams 및 AWS Lambda 연계)를 결합한 무중단 데이터 파이프라인 구축은 현대 클라우드 네이티브 엔지니어링에서 지연 시간 단축과 비용 효율화를 동시에 달성하는 모범적 설계 패턴으로 주목됩니다.
    </p>
  </section>

  <!-- 🔗 오늘의 주요 큐레이션 링크 -->
  <section style='border-top: 2px solid #E2E8F0; padding-top: 24px; margin-top: 40px;'>
    <h2 style='font-size: 1.2rem; font-weight: 700; color: #0F172A; margin: 0 0 16px 0; display: flex; align-items: center; gap: 8px;'>
      <span>🔗</span> 오늘의 주요 큐레이션 링크 (Curated Sources)
    </h2>
    <ul style='margin: 0; padding-left: 20px; color: #475569; font-size: 0.925rem; line-height: 2;'>
      <li>
        <strong>Crypto Briefing:</strong> Anthropic commits over $100B to AWS as IPO prospectus prepares to reveal deal details &mdash; 
        <a href='https://news.google.com/rss/articles/CBMibkFVX3lxTE9GYTZJYVlvdFpJVkNsMzZyZWR2aW9jTVhMQVFKUF80UWJ4VWF6RjRjaFQ5d25HMXcxN0V1OTlfOUVPcXg2UUhuZEN3OW1zb2NidzluZ0V1bzlTZC1yQmJ4OG5XcDhBbVF5R0ZhZFhR?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: underline;'>기사 원문 보기</a>
      </li>
      <li>
        <strong>tokenpost.kr:</strong> 앤트로픽, 아마존 클라우드에 135조원 지출 약속 &mdash; 
        <a href='https://news.google.com/rss/articles/CBMiXkFVX3lxTE9JTjBsd2R0ZEs5anhOR21ETjlkTDZhYkNfQUEwa0k5bHhlN3lwaXFMMHEzUTdiMHhTUXZNS3dwVDZQWmZJQ3ZYZkRkRlgzWWtFSllRZzZUeHB1dmdickHSAV5BVV95cUxPSU4wbHdkdGRLOWp4TkdtRE45ZEw2YWJDX0FBMGtJOWx4ZTd5cGlxTDBxM1E3YjB4U1F2TUt3cFQ2UFpmSUN2WGZEZEZYM1lrRUpZUWc2VHhwdXZnYnJB?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: underline;'>기사 원문 보기</a>
      </li>
      <li>
        <strong>energynow:</strong> Microsoft and Chevron Sign 20-Year Power Deal For Texas Data Center &mdash; 
        <a href='https://news.google.com/rss/articles/CBMinwFBVV95cUxQNmtOMnRJVnZpV0VpVE1FdDZhSGJtLWtoY0Q0ODhXaVpfdzBmQU16X3A3MUw5TEo2T0VoRTBwZXlvX19kLXcyMFVXUE9yNGpxekRWcG4wOFQzYVJiMHJVWTEtY0JiOVhyeXlhaS1EX1ZaRDhPN1Q4S2tCOTlNT216eVl5WnhBeFpNa2RDOVBhWk1CdElYMWZ6eHZqSFBjN1k?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: underline;'>기사 원문 보기</a>
      </li>
      <li>
        <strong>NewsBytes:</strong> NVIDIA, Microsoft say AI data centers are less thirsty now &mdash; 
        <a href='https://news.google.com/rss/articles/CBMirgFBVV95cUxPOGhNM3JpU0QwYTBGNi1uS1dmYkRXQTIxYjQydUJ0cnFLcUhIOHZnby15dERWaGZ0ZUs2YkxpdnhSM25DY1RfekhzZ3VxaGUtaC1pTXgtLUpMVkg1c2xCWmFtN2RTOG91OXJPSkQ5VExGeW5oa2dBT2lIYnRpV20xUnlTeS13OXVvRGh0V1UxUEFaWGlBRGE3SUVCajFLVFFLODVIZFJjeWJZc0poYVE?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: underline;'>기사 원문 보기</a>
      </li>
      <li>
        <strong>초이스경제:</strong> GS건설·LG유플러스, 모듈러로 AI센터 '공급 속도' 높인다 &mdash; 
        <a href='https://news.google.com/rss/articles/CBMic0FVX3lxTE1MYk9sVDlGMVBJSWdsbHk4TU92Uks2N2sxMk04eFJoc1E4MXl0WmtyOFM4Zml3LUVwT2IyZ3h5dFVPbU1OYWhTT3BHYXVKTUVVQmtzdUZMbnJfYXJoSGphWnFPUi1razlEcGhDajhRVWV1OGvSAXNBVV95cUxNTGJPbFQ5RjFQSUlnbGx5OE1PdlJLNjdrMTJNOHhSaHNRODF5dFprcjhTOGZpdy1FcE9iMmd4eXRVT21NTmFoU09wR2F1Sk1FVUJrc3VGTG5yX2FyaEhqYVpxT1Ita2s5RHBoQ2o4UVVldThr?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: underline;'>기사 원문 보기</a>
      </li>
      <li>
        <strong>연합뉴스:</strong> 우상호 지사 "원주 KT·춘천 신세계와 AI 데이터센터 투자 협의" &mdash; 
        <a href='https://news.google.com/rss/articles/CBMic0FVX3lxTE51bXZSYjFlT0cxX0hfY3lxRkdmTGlxOWNsN2tjYk9XQ1JYS2xEMUctcnBmSG5sbFU0cVBtMGlNbWZfcEhrRFFraFh5enZ0RElqYnAzV0VXVmxPcFhjSG1kQkYwUTBIQjlIemlDazBIUUVhX28?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: underline;'>기사 원문 보기</a>
      </li>
      <li>
        <strong>Unite.AI:</strong> 아마존, 크라우드소싱 마켓플레이스 Mechanical Turk 최종 종료 선언 &mdash; 
        <a href='https://news.google.com/rss/articles/CBMioAFBVV95cUxOdGNVRmFOdkZIZGFDTzNsMXI4Z1pja3hFdThiWmt6bk5waFBIUXZRZUJaR21IcHp5SXg0QzFIaVdOSzNVZVJGTG10VFpKSmlEMDNPa25QOF9EdjNobFE1SGxVczJjbGNJUFJ3LS1jN09Xb2tBdUV2LURWV0RBeTVrVWk0UGFuOEswbUo0ZEp4cDZMQ2U2X09nRjlzOWRYX1g3?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: underline;'>기사 원문 보기</a>
      </li>
      <li>
        <strong>AWS Architecture Blog:</strong> 채널코퍼레이션의 Amazon DynamoDB와 함께한 아키텍처 현대화 여정 3부 &mdash; 
        <a href='https://news.google.com/rss/articles/CBMizwFBVV95cUxOUVhKRDlwRk44SHdfbWt6a3hPYkpHRTlLYml5QnRkcjd4eXZsbF95RzE2R1M1VER1R1Z3Q2VGejR5S3MxWVJnMmRPNmhTdm9HXzRvc056NGt4SVBMXzZodFJ2ZHdnQzIwQXRZaDZDbHdfc0lkbXFGeUZlcUp5amY0eTJZQnZYajRseEdOdldYdEZ3OF9jd25MREtRbXlKQ1lFdk02TElKVWItSThicGttWTdzbnRwdTlqaHluOTFzb3VrclhVNDlZemhGMERFN3M?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: underline;'>기사 원문 보기</a>
      </li>
    </ul>
  </section>

</div>