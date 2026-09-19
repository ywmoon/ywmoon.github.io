---
id: 2026-09-20-2027-budget-aidc-gpu-strategy
title: "[테크 딥다이브] 2027년 대한민국 예산안 심층 분석: 엔비디아 '베라 루빈' GPU 1만장과 국가 전략 AIDC 대전환"
date: 2026-09-20
time: "08:00"
category: Tech Deep Dive
status: published
summary: "대한민국 기획예산처가 발표한 2027년도 예산안(총 820.9조원)을 AI 데이터센터(AIDC) 인프라 관점에서 정밀 해부합니다. 엔비디아 차세대 '베라 루빈(Vera Rubin)' GPU 1만장 구매(3.9조원), 10MW 실증 테스트랩, 액체냉각 소부장 R&D, 345kV 변전소 44개 구축, 10GW 송전단 ESS 등 국가 주도 AIDC 완결형 생태계 구축 전략을 분석합니다."
labels:
  - 테크딥다이브
  - 2027년예산안
  - AI데이터센터
  - AIDC
  - 베라루빈
  - 엔비디아
  - 액체냉각
  - 10MW테스트랩
  - 전력망
  - 345kV
  - ESS
  - 데이터센터인프라
updated: "2026-09-20 08:00"
---

<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif; line-height: 1.85; color: #1E293B; max-width: 100%; word-break: keep-all; font-size: 16px;">

  <!-- 서론 인트로 카드 -->
  <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color: #FFFFFF; padding: 32px 28px; border-radius: 12px; margin-bottom: 36px; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.15);">
    <div style="display: inline-block; background-color: #2563EB; color: #FFFFFF; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 14px;">POLICY & INFRA DEEP DIVE</div>
    <h1 style="font-size: 26px; font-weight: 800; line-height: 1.4; margin: 0 0 16px 0; color: #F8FAFC;">2027년 대한민국 예산안 심층 분석: '베라 루빈' GPU 1만장과 국가 전략 AIDC 인프라 대전환</h1>
    <p style="font-size: 15px; line-height: 1.7; color: #CBD5E1; margin: 0;">대한민국 기획예산처가 확정한 2027년도 본예산안(총 820.9조원)을 기술 및 데이터센터 인프라 관점에서 정밀 해부합니다. AI를 순수 소프트웨어가 아닌 '초고전력·고발열의 물리적 기간산업'으로 재정의하고, 초고성능 가속기 매입부터 10MW 실증랩, 액체냉각 소부장, 345kV 변전소, 10GW 송전단 ESS까지 망라한 정부의 승부수를 분석합니다.</p>
  </div>

  <!-- 출처 박스 -->
  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #3B82F6; border-radius: 8px; padding: 16px 20px; margin-bottom: 32px; font-size: 14px; color: #475569;">
    <strong>📄 기반 정책 문서:</strong> 대한민국 기획예산처, <em>2027년 예산안: “대체불가 대한민국으로 대도약”</em> (2026년 9월)<br>
    <strong>🔗 핵심 분석 축:</strong> 「3대 메가프로젝트 + AI」 총력 지원 (10.8 → 21.3조원), 국산 AIDC 생태계 (0.2 → 0.5조원), 전력·용수·산단 인프라 (2.1조원), 프론티어급 AI 모델 (4.7조원)<br>
    <strong>🌐 연계 기술 리서치:</strong> 삼일PwC경영연구원 (<em>데이터센터 냉각 기술의 부상</em>, 2026.08), NVIDIA Vera Rubin Architecture Roadmap
  </div>

  <p>최근 글로벌 빅테크 진영의 AI 경쟁 축은 거대언어모델(LLM) 파라미터 확장 경쟁을 넘어 <strong>‘전력과 냉각, 그리고 초고밀도 물리적 인프라’</strong>를 누가 선점하느냐로 완전히 재편되었습니다. 랙(Rack)당 전력 밀도가 엔비디아 GB200(120kW)을 넘어, 2027년 양산되는 <strong>베라 루빈 울트라(Vera Rubin Ultra) 시대에는 600kW~1MW</strong>에 육박함에 따라 전통적인 공랭식 데이터센터는 물리적 한계에 봉착했습니다.</p>

  <p>이번에 공개된 <strong>2027년도 대한민국 예산안</strong>은 이러한 글로벌 테크 격변을 정확하게 정조준하고 있습니다. 정부는 반도체 호조에 따른 사상 최대 세수 확충(+205.6조원)을 지렛대 삼아, 총지출을 전년 대비 12.8% 늘린 820.9조원으로 편성하면서 <strong>AIDC(AI 데이터센터) 밸류체인 전반에 천문학적인 재정 투자를 확정</strong>했습니다.</p>

  <!-- 1장: Executive Summary -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">📌 1. Executive Summary: 4대 핵심 승부수</h2>
  
  <div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">
    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #2563EB; border-radius: 8px; padding: 18px 20px;">
      <div style="font-size: 15px; font-weight: 700; color: #1E40AF; margin-bottom: 6px;">1. 엔비디아 차세대 플래그십 '베라 루빈(Vera Rubin)' GPU 1만장 일괄 확보 (3.9조원)</div>
      <div style="font-size: 14px; color: #475569; line-height: 1.7;">독자적 소버린 AI 역량 구축을 위해 국가 차원에서 최고 사양 GPU 1만장을 직접 매입하고, 고품질 데이터(0.8조원) 및 해외 석학(250억원)을 묶어 총 4.7조원 규모의 프론티어 AI 프로젝트 가동. 정부 최초 <strong>‘지분투자(출자)’</strong> 방식으로 과실 환류 구조 설계.</div>
    </div>
    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #10B981; border-radius: 8px; padding: 18px 20px;">
      <div style="font-size: 15px; font-weight: 700; color: #065F46; margin-bottom: 6px;">2. 10MW 규모 AIDC 핵심부품 테스트랩 신설 및 액체냉각 소부장 R&D (0.5조원)</div>
      <div style="font-size: 14px; color: #475569; line-height: 1.7;">글로벌 빅테크 납품의 최대 관문인 신뢰성 검증을 위해 <strong>10MW 실증 테스트랩(668억원)</strong>을 구축하고, 액체냉각(D2C/액침)·고전력 소부장 및 클라우드 가상화 기술개발(1,545억원)에 집중 투자. 90개 유망 기업 해외진출 밀착 지원.</div>
    </div>
    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #F59E0B; border-radius: 8px; padding: 18px 20px;">
      <div style="font-size: 15px; font-weight: 700; color: #92400E; margin-bottom: 6px;">3. '전력망 속도전': 345kV 변전소 44개 구축 및 10GW 초대형 ESS (2.1조원)</div>
      <div style="font-size: 14px; color: #475569; line-height: 1.7;">AIDC의 최대 병목인 전력난을 해소하기 위해 <strong>한국전력에 5,000억원 정부 출자</strong>(자본금 3.7조원 확충), 2035년까지 345kV 변전소 44개 신설 착수, 10GW 규모 송전단 ESS(5,724억원)로 계통 안정화 전폭 지원.</div>
    </div>
    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #8B5CF6; border-radius: 8px; padding: 18px 20px;">
      <div style="font-size: 15px; font-weight: 700; color: #5B21B6; margin-bottom: 6px;">4. 냉각용 공업용수 확보(0.4조원) 및 산업 데이터 팩토리 연계 (2,008억원)</div>
      <div style="font-size: 14px; color: #475569; line-height: 1.7;">수자원공사 출자(2,500억원)를 통해 서남권(일 133만톤) 및 충청권 산업용수 확충. AIDC 연산 자원에 투입할 피지컬 AI 트레이닝센터·데이터팩토리(850억원)와 제조데이터 라이브러리(1,158억원) 동시 구축.</div>
    </div>
  </div>

  <!-- 2장: 컴퓨팅 자산 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">⚙️ 2. 하드웨어 컴퓨팅 자산: 엔비디아 '베라 루빈' 1만장의 전략적 함의</h2>
  
  <p>2027년 예산안에서 가장 주목할 수치는 과기정통부 주관의 <strong>'프론티어급 AI 모델 개발 사업(4.7조원)'</strong>에 책정된 <strong>엔비디아 최상위 GPU 1만장 구매(3.9조원)</strong> 항목입니다.</p>

  <div style="background-color: #F1F5F9; border-radius: 8px; padding: 20px; margin: 24px 0;">
    <h4 style="margin: 0 0 12px 0; color: #0F172A; font-size: 16px;">🔍 왜 차세대 GPU '베라 루빈(Vera Rubin)'인가?</h4>
    <p style="margin: 0 0 10px 0; font-size: 14px; color: #334155; line-height: 1.7;">
      루빈(Rubin) 아키텍처는 TSMC 3nm N3P 공정의 듀얼 컴퓨트 다이와 2048-bit 와이드 인터페이스 <strong>HBM4(288GB, 대역폭 22.0 TB/s)</strong>를 탑재한 초고성능 플랫폼입니다. 단일 노드 연산력뿐만 아니라 올투올(All-to-All) 통신 대역폭이 3.6 TB/s에 달하는 NVLink 6 스위치 패브릭으로 연결되어 있어, 추론형 에이전트 및 초거대 파운데이션 모델 훈련의 메모리 병목을 완벽히 해소합니다.
    </p>
    <div style="font-size: 13px; color: #64748B;">
      • <strong>정부 조달 풀:</strong> 신규 구매 1.0만장 + 기존 정부 확보 0.7만장 + 산·학·연 민간 임차 0.8만장 ➔ <strong>총 2.5만장급 국가 AI 가속기 풀 가동</strong>
    </div>
  </div>

  <h3 style="font-size: 18px; font-weight: 700; color: #0F172A; margin: 28px 0 14px 0;">💡 '출연/보조'에서 '지분투자(출자)'로의 재정 패러다임 전환</h3>
  <p>이번 4.7조원 GPU 투자는 과거의 관행적 무상 보조금 지급 방식을 탈피했습니다. 정부가 직접 지분(Equity)을 확보하는 <strong>'출자 방식'</strong>으로 설계되었습니다.</p>
  <ul>
    <li><strong>선순환 구조:</strong> 공모를 통해 선정된 핵심 AI 기업 및 컨소시엄에 대규모 GPU 컴퓨팅 파워를 현물/지분 형태로 출자하고, 향후 사업화 및 기업가치 상승에 따른 배당·매각 이익을 국고로 환류합니다.</li>
    <li><strong>국산 NPU 연계:</strong> 1만장 규모의 GPU 클러스터와 더불어, 국산 NPU의 실전 상용화를 지원하기 위한 <strong>풀스택 최적화 R&D(신규 200억원)</strong> 및 레퍼런스 확보 사업(1,100억원)을 병행 배치하여 외산 GPU 종속을 방지합니다.</li>
  </ul>

  <!-- 3장: 국산 AIDC 생태계 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">❄️ 3. 국산 AIDC 산업생태계: 10MW 실증 테스트랩과 액체냉각 R&D</h2>

  <p>삼일PwC의 최근 냉각 산업 리포트가 지적했듯, 한국 기업(LG전자 무급유 칠러, SK엔무브/GS칼텍스 액침냉각유, GST 반도체 공조, 케이엔솔/신성이엔지 클린룸)은 세계 최고 수준의 하드웨어 기술을 보유하고 있음에도 <strong>'실제 하이퍼스케일 가동 레퍼런스(PUE 및 장기 신뢰성 데이터)'</strong>가 부족해 글로벌 빅테크 진입에 어려움을 겪어왔습니다.</p>

  <!-- 테스트랩 및 냉각 지원 테이블 -->
  <div style="overflow-x: auto; margin: 24px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
      <thead>
        <tr style="background-color: #F1F5F9; border-bottom: 2px solid #CBD5E1;">
          <th style="padding: 12px 16px; color: #0F172A; font-weight: 700;">구분</th>
          <th style="padding: 12px 16px; color: #0F172A; font-weight: 700;">2027년 예산</th>
          <th style="padding: 12px 16px; color: #0F172A; font-weight: 700;">주요 사업 내용 및 전략적 의미</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 12px 16px; font-weight: 600; color: #1E40AF;">10MW AIDC 테스트랩 구축</td>
          <td style="padding: 12px 16px; font-weight: 700; color: #0F172A;">신규 668억원</td>
          <td style="padding: 12px 16px; color: #475569;">10MW급 고전력·고발열 환경에서 국산 가속기(NPU), 액체냉각(D2C/액침), 전력분배(CDU), 서버 부품의 성능과 신뢰성을 공인 검증하는 국가 인프라 신설</td>
        </tr>
        <tr style="border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;">
          <td style="padding: 12px 16px; font-weight: 600; color: #1E40AF;">AIDC 서버·냉각 소부장 R&D</td>
          <td style="padding: 12px 16px; font-weight: 700; color: #0F172A;">신규 1,545억원</td>
          <td style="padding: 12px 16px; color: #475569;">고밀도 랙(100kW+) 전용 액침냉각 및 D2C 콜드플레이트 부품, 저전력 고효율 서버 섀시, 초고속 인터커넥트 및 클라우드 오케스트레이션 SW 개발</td>
        </tr>
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 12px 16px; font-weight: 600; color: #1E40AF;">AIDC 유망기업 사업화·수출</td>
          <td style="padding: 12px 16px; font-weight: 700; color: #0F172A;">신규 210억원</td>
          <td style="padding: 12px 16px; color: #475569;">국내 90개 유망 AIDC 전력·공조·소부장 스타트업 및 중소기업을 발굴하여 북미/유럽 하이퍼스케일러 규격 인증 컨설팅 및 해외 동반 진출 지원</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>이로써 2027년부터는 국내 냉각 기업들이 해외에 나가지 않고도 정부 테스트랩을 통해 <strong>공식 PUE(전력효율지수) 성적서와 내구성 인증</strong>을 획득할 수 있는 제도적 고속도로가 개통됩니다.</p>

  <!-- 4장: 전력망 및 계통 인프라 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">⚡ 4. '전력망 속도전': 345kV 변전소 44개와 10GW 초대형 ESS (2.1조원)</h2>

  <p>AI 데이터센터의 성패는 부지가 아니라 <strong>'변전소와 송전선로를 얼마나 빨리 연결할 수 있는가'</strong>에 달려 있습니다. 수도권 전력 포화와 송전망 지연으로 수많은 데이터센터 개발이 멈춰 섰던 문제를 해결하기 위해, 정부는 예산안에서 <strong>전력망 속도전</strong>을 선언했습니다.</p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin: 24px 0;">
    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-top: 4px solid #2563EB; border-radius: 8px; padding: 20px;">
      <h4 style="margin: 0 0 8px 0; color: #0F172A; font-size: 16px;">🏭 345kV 변전소 44개 구축 (~'35)</h4>
      <p style="margin: 0; font-size: 14px; color: #475569; line-height: 1.7;">첨단 반도체 산단 및 AIDC 클러스터 맞춤형 초고압 변전소 집중 신설. 2027년 658억원을 투입해 44개 변전소 로드맵 조기 착수.</p>
    </div>
    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-top: 4px solid #10B981; border-radius: 8px; padding: 20px;">
      <h4 style="margin: 0 0 8px 0; color: #0F172A; font-size: 16px;">🔋 10GW급 송전단 ESS (5,724억원)</h4>
      <p style="margin: 0; font-size: 14px; color: #475569; line-height: 1.7;">AIDC의 급격한 피크 전력 부하와 서남권 태양광 등 재생에너지 간헐성을 완충하기 위한 10GW급 초대형 에너지저장장치 선제 배치.</p>
    </div>
    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-top: 4px solid #F59E0B; border-radius: 8px; padding: 20px;">
      <h4 style="margin: 0 0 8px 0; color: #0F172A; font-size: 16px;">🏛️ 한국전력 5,000억원 정부 출자</h4>
      <p style="margin: 0; font-size: 14px; color: #475569; line-height: 1.7;">한전 자본금을 3.2조 → 3.7조원으로 증자하여 재무구조를 개선하고, 지연되던 국가 간선 송전망(HVDC, 지중화) 조기 발주 여력 확보.</p>
    </div>
    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-top: 4px solid #8B5CF6; border-radius: 8px; padding: 20px;">
      <h4 style="margin: 0 0 8px 0; color: #0F172A; font-size: 16px;">💧 수자원공사 출자 및 용수 확충</h4>
      <p style="margin: 0; font-size: 14px; color: #475569; line-height: 1.7;">AIDC 냉각탑 및 클러스터 냉각수에 필수적인 공업용수 관로 구축(1,277억원)과 한국수자원공사 2,500억원 출자로 용수 병목 사전 차단.</p>
    </div>
  </div>

  <!-- 5장: 총괄 매핑표 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">📊 5. 한눈에 보는 2027년 AIDC 종합 투자 맵</h2>

  <div style="overflow-x: auto; margin: 24px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
      <thead>
        <tr style="background-color: #0F172A; color: #FFFFFF;">
          <th style="padding: 12px 16px;">레이어</th>
          <th style="padding: 12px 16px;">핵심 세부 사업</th>
          <th style="padding: 12px 16px;">예산액 ('27안)</th>
          <th style="padding: 12px 16px;">목표 및 성과 지표</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #CBD5E1;">
          <td style="padding: 12px 16px; font-weight: 700; color: #1E293B;">연산 가속기</td>
          <td style="padding: 12px 16px;">엔비디아 최상위 GPU(베라 루빈) 구매</td>
          <td style="padding: 12px 16px; font-weight: 700; color: #2563EB;">3.9조원</td>
          <td style="padding: 12px 16px;">GPU 1만장 확보, 국가대표 AI 모델 출자</td>
        </tr>
        <tr style="border-bottom: 1px solid #CBD5E1; background-color: #F8FAFC;">
          <td style="padding: 12px 16px; font-weight: 700; color: #1E293B;">인재 / 데이터</td>
          <td style="padding: 12px 16px;">AI 학습용 데이터 구매 및 해외 석학 유치</td>
          <td style="padding: 12px 16px; font-weight: 700; color: #2563EB;">8,250억원</td>
          <td style="padding: 12px 16px;">고품질 데이터 확보, 최고급 연구자 20명 유치</td>
        </tr>
        <tr style="border-bottom: 1px solid #CBD5E1;">
          <td style="padding: 12px 16px; font-weight: 700; color: #1E293B;">실증 인프라</td>
          <td style="padding: 12px 16px;">10MW급 AIDC 핵심부품 테스트랩 구축</td>
          <td style="padding: 12px 16px; font-weight: 700; color: #2563EB;">668억원</td>
          <td style="padding: 12px 16px;">국산 NPU, 액체냉각, 변전 모듈 실증 검증</td>
        </tr>
        <tr style="border-bottom: 1px solid #CBD5E1; background-color: #F8FAFC;">
          <td style="padding: 12px 16px; font-weight: 700; color: #1E293B;">냉각·소부장</td>
          <td style="padding: 12px 16px;">AIDC 전용 서버, 고전력·냉각 R&D</td>
          <td style="padding: 12px 16px; font-weight: 700; color: #2563EB;">1,545억원</td>
          <td style="padding: 12px 16px;">D2C/액침냉각 국산화율 제고, 가상화 SW 고도화</td>
        </tr>
        <tr style="border-bottom: 1px solid #CBD5E1;">
          <td style="padding: 12px 16px; font-weight: 700; color: #1E293B;">수출 지원</td>
          <td style="padding: 12px 16px;">AIDC 유망기업 사업화 및 해외진출</td>
          <td style="padding: 12px 16px; font-weight: 700; color: #2563EB;">210억원</td>
          <td style="padding: 12px 16px;">국내 90개 소부장 기업 해외 하이퍼스케일 연계</td>
        </tr>
        <tr style="border-bottom: 1px solid #CBD5E1; background-color: #F8FAFC;">
          <td style="padding: 12px 16px; font-weight: 700; color: #1E293B;">국산 반도체</td>
          <td style="padding: 12px 16px;">K-AI 반도체 풀스택 레퍼런스 확보</td>
          <td style="padding: 12px 16px; font-weight: 700; color: #2563EB;">1,100억원</td>
          <td style="padding: 12px 16px;">국산 NPU-소프트웨어 최적화 및 상생팹 구축</td>
        </tr>
        <tr style="border-bottom: 1px solid #CBD5E1;">
          <td style="padding: 12px 16px; font-weight: 700; color: #1E293B;">전력망(변전)</td>
          <td style="padding: 12px 16px;">345kV 변전소 신설 및 송전선로 지중화</td>
          <td style="padding: 12px 16px; font-weight: 700; color: #2563EB;">881억원</td>
          <td style="padding: 12px 16px;">변전소 44개 구축 착수, 지중화율 50% 목표</td>
        </tr>
        <tr style="border-bottom: 1px solid #CBD5E1; background-color: #F8FAFC;">
          <td style="padding: 12px 16px; font-weight: 700; color: #1E293B;">계통 안정화</td>
          <td style="padding: 12px 16px;">송전단 대형 ESS 및 전기품질 안정화 설비</td>
          <td style="padding: 12px 16px; font-weight: 700; color: #2563EB;">6,108억원</td>
          <td style="padding: 12px 16px;">10GW 규모 ESS(~'30)로 주파수·전압 안정화</td>
        </tr>
        <tr style="border-bottom: 1px solid #CBD5E1;">
          <td style="padding: 12px 16px; font-weight: 700; color: #1E293B;">송전망 자본</td>
          <td style="padding: 12px 16px;">한국전력공사 정부 재정 출자</td>
          <td style="padding: 12px 16px; font-weight: 700; color: #2563EB;">5,000억원</td>
          <td style="padding: 12px 16px;">한전 자본금 3.2조 → 3.7조원 확충</td>
        </tr>
        <tr style="border-bottom: 1px solid #CBD5E1; background-color: #F8FAFC;">
          <td style="padding: 12px 16px; font-weight: 700; color: #1E293B;">냉각수 인프라</td>
          <td style="padding: 12px 16px;">첨단산단 용수공급 및 수자원공사 출자</td>
          <td style="padding: 12px 16px; font-weight: 700; color: #2563EB;">3,777억원</td>
          <td style="padding: 12px 16px;">일 133만톤 산단 공급 체계, 수공 2,500억 출자</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 6장: 인프라옵스 관전 포인트 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">💡 6. DC InfraOps 관전 포인트: 무엇이 바뀌는가?</h2>

  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 24px; margin: 24px 0;">
    <h4 style="margin: 0 0 14px 0; color: #0F172A; font-size: 16px;">1) 한국형 AIDC의 지리적 대이동: 수도권 과밀에서 남부권 벨트로</h4>
    <p style="font-size: 14px; color: #475569; line-height: 1.7; margin-bottom: 18px;">
      이번 예산안에는 <strong>'5극3특 성장엔진특별보조금(대규모 지방 투자 시 설비투자비 최대 50% 국비 보조)'</strong>과 <strong>광주·전남 행정통합 인센티브 5조원</strong>이 포함되어 있습니다. 수도권 전력 공급이 한계에 다다른 상황에서, 재생에너지(태양광·해상풍력)와 공업용수, 파격적 국비 보조가 결합된 <strong>호남권(솔라시도·광주·전남)과 영남권</strong>이 대한민국 메가 AIDC 허브로 부상할 것입니다.
    </p>

    <h4 style="margin: 0 0 14px 0; color: #0F172A; font-size: 16px;">2) 국내 전력기기·냉각 밸류체인의 수혜 가시화</h4>
    <p style="font-size: 14px; color: #475569; line-height: 1.7; margin-bottom: 18px;">
      345kV 변전소 44개 구축과 10GW ESS, 10MW 테스트랩은 국내 중전기기(초고압 변압기, GIS 수배전반), 전선(지중화 케이블), 배터리 ESS, 그리고 D2C/액침냉각 기업들에게 사상 최대 규모의 공공·민간 합작 트랙레코드를 안겨줄 것입니다.
    </p>

    <h4 style="margin: 0 0 14px 0; color: #0F172A; font-size: 16px;">3) 전 국민 '모두의 AI 에이전트' 서비스 개시</h4>
    <p style="font-size: 14px; color: #475569; line-height: 1.7; margin: 0;">
      AIDC가 구축되면 국가 독자 파운데이션 모델을 기반으로 주민등록 발급, KTX 예매, 세무·돌봄 신청 등을 AI가 직접 알아서 처리해 주는 <strong>'대국민 공공 AI 에이전트(0.25조원)'</strong>가 전 국민에게 무제한·무료로 개방됩니다.
    </p>
  </div>

  <p style="margin-top: 36px; font-weight: 600; color: #0F172A;">
    2027년 대한민국 예산안은 AI를 소프트웨어 연구실에서 끄집어내어 <strong>초고전압 전력망과 액체냉각 배관이 교차하는 거대한 물리적 산업 생태계</strong>로 전환시키는 분수령이 될 것입니다.
  </p>

</div>
