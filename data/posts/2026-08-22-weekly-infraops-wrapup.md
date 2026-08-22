---
id: 2026-08-22-weekly-infraops-wrapup
title: "[주간 종합 결산] 8월 3주차 글로벌 클라우드 & 데이터센터 인프라옵스 트렌드 종합 리포트 (8.17~8.22)"
date: 2026-08-22
time: "09:00"
category: Weekly Report
status: published
summary: "2026년 8월 3주차 글로벌 클라우드 및 데이터센터 인프라옵스 주간 종합 결산 리포트. 엔비디아의 인프라 금융화(1,050억 달러 보증 및 30억 달러 투자), 기가와트(GW)급 AI 팩토리 확장, SMR과 가스 발전 중심의 기저전원 확보전, 액체냉각 및 철골 강구조 전환, 글로벌 그리드락과 지자체 모라토리엄 규제를 심층 분석합니다."
labels:
  - 주간리포트
  - AWS
  - 엔비디아
  - 클라우드
  - 데이터센터
  - AI인프라
  - SMR
  - 액체냉각
  - 전력망
  - 인프라동향
  - 오픈AI
---

<div style='font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.85; color: #1E293B; word-break: keep-all; font-size: 15.5px; max-width: 100%; margin: 0 auto;'>

  <!-- 리포트 헤더 배너 -->
  <div style='background: linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #0369A1 100%); color: #F8FAFC; padding: 40px 34px; border-radius: 16px; margin-bottom: 36px; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.25);'>
    <div style='display: inline-block; background-color: #38BDF8; color: #0F172A; font-weight: 800; font-size: 12px; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 14px;'>Weekly InfraOps Executive Intelligence</div>
    <h1 style='font-size: 28px; font-weight: 800; line-height: 1.35; margin: 0 0 14px 0; color: #FFFFFF;'>2026년 8월 3주차 글로벌 클라우드 &amp; 데이터센터 인프라옵스 주간 종합 리포트</h1>
    <p style='font-size: 15px; color: #BAE6FD; margin: 0;'>분석 기간: 2026년 8월 17일(월) ~ 8월 22일(토) | IT 인프라 아키텍트, 전력망 기획자 &amp; CTO를 위한 종합 분석 리포트</p>
  </div>

  <!-- 주간 4대 핵심 관전 포인트 (Highlights Box) -->
  <div style='background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 6px solid #2563EB; border-radius: 12px; padding: 26px 28px; margin-bottom: 40px;'>
    <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; margin-top: 0; margin-bottom: 18px; display: flex; align-items: center;'>
      📌 주간 4대 핵심 관전 포인트 (Weekly Key Highlights)
    </h2>
    <ul style='margin: 0; padding-left: 22px; color: #334155; font-size: 15px; line-height: 1.85;'>
      <li style='margin-bottom: 14px;'>
        <strong>AI 인프라 금융 구조의 전면 고도화 (Financier Pivot):</strong> 엔비디아가 오픈AI의 오하이오 8GW 프로젝트를 위해 최대 1,050억 달러(약 145조 원)의 금융 보증을 제공하고 개발사 SB 에너지에 15억~30억 달러를 직접 지분 투자하며, 단순 칩 공급사를 넘어 '전력·부지·컴퓨팅' 턴키 생태계를 독점하는 인프라 금융사로 변모했습니다.
      </li>
      <li style='margin-bottom: 14px;'>
        <strong>기가와트(GW)급 메가 프로젝트와 하이퍼스케일러 확장:</strong> AWS의 루이지애나 슈리브포트 180억 달러(약 24조 원) 제3 캠퍼스 착공, 네이버의 아시아 허브 GW급 AI 팩토리 구상, CoreWeave의 엔비디아 차세대 베라 루빈(Vera Rubin) NVL72 기반 수십억 달러 공급 계약 등 초대형 인프라 거점 확장이 동시다발적으로 진행되었습니다.
      </li>
      <li style='margin-bottom: 14px;'>
        <strong>기저전원 확보전과 국가 전력망 슈퍼사이클:</strong> 테라파워-SK이노베이션·두산에너빌리티의 'K-나트륨' SMR 동맹 실질 사업화, NextEra의 33억 달러 가스발전 10GW 착공, 대한민국 제12차 전력수급기본계획의 2040년 목표치 27GW 상향(165GW) 조정에 따라 초고압 변전·버스덕트 기자재(LS그룹 수주 20조 원, 가온전선 2,000억 원 수주) 수요가 폭발했습니다.
      </li>
      <li>
        <strong>물리 아키텍처 혁신 vs 로컬 그리드락(Gridlock) 규제:</strong> 랙당 100kW+ 발열 제어를 위한 액체냉각(삼성전자 광주 2,400억 CDU 공장, NHN 팩토리X B200 7,656장 D2C) 및 철골 강구조 전환이 가속화된 반면, 미 전역 500여 지자체의 모라토리엄, PJM의 50MW+ 자가발전(BYOP) 강제, 펜실베이니아 행정명령, TVA 차등 요금제 등 입법 장벽이 최고조에 달했습니다.
      </li>
    </ul>
  </div>

  <!-- 섹션 1: 클라우드 & 하이퍼스케일러 동향 -->
  <div style='margin-bottom: 50px;'>
    <h2 style='font-size: 22px; font-weight: 800; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 12px; margin-bottom: 22px;'>
      🔍 섹션 1: 클라우드 &amp; 하이퍼스케일러 생태계 및 인프라 금융화 심층 분석
    </h2>

    <h3 style='font-size: 18px; font-weight: 700; color: #2563EB; margin-top: 24px; margin-bottom: 12px;'>
      1. 엔비디아의 인프라 금융화: 1,050억 달러 보증, 지분 투자 및 '순환 금융' 공방
    </h3>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      2026년 8월 3주차 글로벌 AI 인프라 시장의 최대 화두는 <strong>엔비디아의 인프라 금융사(Financier)로의 피벗</strong>입니다. 엔비디아는 오픈AI(OpenAI)가 미국 오하이오주 파이크 카운티(Pike County)에 추진 중인 8GW 규모의 초대형 AI 데이터센터 캠퍼스('PORTS-Pike Technology Campus') 구축을 지원하기 위해, 1단계 5GW 물량에 대한 <strong>최대 1,050억 달러(약 145조 원)</strong> 규모의 대출 채무 보증을 최종 확정했습니다.
    </p>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      아울러 엔비디아는 프로젝트 개발사인 소프트뱅크 계열 <strong>SB 에너지(SB Energy)에 최대 30억 달러(약 4조 원)를 직접 지분 투자</strong>하기로 결의했습니다. 특히 계약 조항에는 향후 고객사의 AI 컴퓨팅 수요가 둔화될 경우, 미사용 GPU 인프라를 엔비디아가 재임차해 주는 <em>'Rent-back(역임차) 안전장치'</em>까지 명시되었습니다.
    </p>

    <!-- 원문 인용구 박스 -->
    <div style='background-color: #F8FAFC; border-left: 4px solid #3B82F6; padding: 18px 22px; margin: 20px 0; border-radius: 0 8px 8px 0; font-size: 14.5px; color: #334155; line-height: 1.75;'>
      <strong>💬 젠슨 황(Jensen Huang) 엔비디아 CEO 및 외신 분석 인용:</strong><br/>
      <em>"우리가 제공하는 신용 보증과 투자는 단순한 금융 지원이 아닙니다. 차세대 AI 팩토리를 건설하는 데 필요한 전력원, 부지, 냉각 시스템, 그리고 엔비디아 가속기를 하나로 묶어 시장 진입 속도를 극대화하는 '실물 자산 기반의 생태계 가속 전략'입니다. 미사용 GPU는 엔비디아 자체 연구 및 클라우드 서비스로 즉각 전환할 수 있어 담보 가치가 완벽히 보전됩니다."</em><br/>
      <span style='font-size: 13px; color: #64748B;'>— AI타임스 및 블룸버그(Bloomberg) 인터뷰 원문 발췌</span>
    </div>

    <p style='font-size: 15px; margin-bottom: 14px;'>
      월가 일각에서는 2000년대 닷컴 버블 당시 통신 장비 벤더 파이낸싱을 연상시키는 '순환 금융 리스크'를 경고했으나, 엔비디아는 실물 컴퓨팅 자산의 강력한 현금 흐름 창출력을 근거로 리스크를 완벽히 통제할 수 있다고 강조했습니다.
    </p>

    <h3 style='font-size: 18px; font-weight: 700; color: #2563EB; margin-top: 28px; margin-bottom: 12px;'>
      2. AWS의 루이지애나 180억 달러 제3 캠퍼스 &amp; Oracle Database@AWS 22개 리전 전면 개방
    </h3>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      <strong>아마존웹서비스(AWS)</strong>는 북미 남부권의 에너지 벨트를 선점하기 위해 미국 루이지애나주 슈리브포트(Shreveport)에 60억 달러를 추가 투자, 총 <strong>180억 달러(약 24조 7,000억 원)</strong> 규모의 제3 하이퍼스케일 데이터센터 캠퍼스 착공에 돌입했습니다. 현지 전력사 엔터지(Entergy)와의 1.2GW 규모 장기 전력 공급 계약을 기반으로 남부권 AI 컴퓨팅 거점을 대폭 확충했습니다.
    </p>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      이와 함께 오라클(Oracle)과의 파트너십을 통해 OCI 전용 하드웨어인 엑사데이터(Exadata)를 AWS 가용 영역(AZ) 내부에 직접 탑재하는 <strong>'Oracle Database@AWS'</strong> 서비스를 글로벌 22개 리전으로 전면 개방했습니다.
    </p>

    <!-- 원문 인용구 박스 -->
    <div style='background-color: #F8FAFC; border-left: 4px solid #3B82F6; padding: 18px 22px; margin: 20px 0; border-radius: 0 8px 8px 0; font-size: 14.5px; color: #334155; line-height: 1.75;'>
      <strong>💬 래리 엘리슨(Larry Ellison) 오라클 회장 &amp; AWS 인프라 총괄 성명:</strong><br/>
      <em>"고객들은 더 이상 데이터베이스와 AI 분석 툴을 서로 다른 클라우드 간에 이동시키며 발생하는 지연시간(Latency)과 데이터 전송 비용(Egress Cost)을 감당할 필요가 없습니다. AWS Nitro 인프라와 오라클 Exadata 간의 1ms 미만 초저지연 연동을 통해 진정한 하이브리드 멀티클라우드 아키텍처가 완성되었습니다."</em><br/>
      <span style='font-size: 13px; color: #64748B;'>— ZDNet Korea 및 오라클 공식 발표</span>
    </div>

    <h3 style='font-size: 18px; font-weight: 700; color: #2563EB; margin-top: 28px; margin-bottom: 12px;'>
      3. 특화 네오클라우드 CoreWeave의 베라 루빈(Vera Rubin) 메가 딜과 소버린 AI 팩토리
    </h3>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      GPU 특화 클라우드(Neocloud) 진영에서는 <strong>CoreWeave</strong>가 글로벌 퀀트 금융 기업 허드슨 리버 트레이딩(HRT)과 수십억 달러 규모의 계약을 체결하고 엔비디아 차세대 <em>'Vera Rubin NVL72'</em> 플랫폼 공급을 확정했습니다. Vera CPU, Rubin GPU, 3.6Tbps NVLink 패브릭으로 구성된 이 시스템은 밀리초 단위의 초단타 매매 알고리즘과 수학적 금융 시뮬레이션을 실시간 처리하도록 설계되었습니다.
    </p>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      국내에서는 <strong>네이버(NAVER)</strong>가 엔비디아와의 소버린 AI 파트너십을 바탕으로 춘천 '각', '각 세종'(약 270MW)을 잇는 단일 캠퍼스 <strong>'GW(기가와트)급 AI 팩토리'</strong> 로드맵을 발표했습니다. 아울러 AWS는 국내 로보틱스 및 자율주행 선도 15개 기업과 손잡고 클라우드와 물리 디바이스를 잇는 <em>'AWS 피지컬 AI 프론티어 프로그램'</em>을 공식 론칭했습니다.
    </p>
  </div>

  <!-- 섹션 2: AI 인프라 & 하드웨어·수랭식 냉각 혁신 -->
  <div style='margin-bottom: 50px;'>
    <h2 style='font-size: 22px; font-weight: 800; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 12px; margin-bottom: 22px;'>
      ⚡ 섹션 2: AI 인프라 &amp; 하드웨어·수랭식 냉각·물리 아키텍처 혁신
    </h2>

    <h3 style='font-size: 18px; font-weight: 700; color: #D97706; margin-top: 24px; margin-bottom: 12px;'>
      1. 액체냉각(수랭식) 공급망 내재화: 삼성전자 2,400억 광주 투자 &amp; NHN 팩토리X 가동
    </h3>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      엔비디아 블랙웰(B200, GB200) 및 차세대 칩셋의 열설계전력(TDP)이 랙당 100kW~140kW로 치솟으면서, 기존 공랭식 한계를 극복하는 직접 칩 액체냉각(Direct-to-Chip D2C) 인프라 구축이 필수 요건으로 자리 잡았습니다. 공기의 열전도율(약 0.026 W/m·K)에 비해 액체 냉매의 열전도율(약 0.6 W/m·K)은 24배 이상 높아 고집적 발열을 효과적으로 제어할 수 있습니다.
    </p>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      <strong>삼성전자</strong>는 유럽 공조 전문 기업 플랙트그룹(FläktGroup) 인수 후 첫 대규모 조치로 광주사업장에 <strong>2,400억 원(약 1억 7,000만 달러)</strong>을 전격 투입해 데이터센터 전용 냉난방공조(HVAC) 및 냉각분배장치(CDU: Coolant Distribution Unit) 전용 양산 라인을 착공했습니다. 이는 대만 업체들이 독점하던 글로벌 액체냉각 공급망에 대항해 한국 제조 생태계의 내재화를 이끄는 핵심 교두보입니다.
    </p>

    <!-- 원문 인용구 박스 -->
    <div style='background-color: #FEF3C7; border-left: 4px solid #D97706; padding: 18px 22px; margin: 20px 0; border-radius: 0 8px 8px 0; font-size: 14.5px; color: #78350F; line-height: 1.75;'>
      <strong>💬 삼성전자 DA사업부 &amp; NHN클라우드 발표 인용:</strong><br/>
      <em>"플랙트그룹의 원천 공조 기술과 삼성의 정밀 제조 역량을 결합하여 랙당 100kW 이상의 고발열을 완벽히 제어하는 차세대 CDU를 양산할 것입니다. NHN 팩토리X 서울에서 실증된 바와 같이, D2C 액체냉각 도입은 전체 데이터센터 전력 소비를 13.9% 절감하며 PUE 1.1대를 안정적으로 유지합니다."</em><br/>
      <span style='font-size: 13px; color: #92400E;'>— 매일경제 및 전자신문 인터뷰 발췌</span>
    </div>

    <h3 style='font-size: 18px; font-weight: 700; color: #D97706; margin-top: 28px; margin-bottom: 12px;'>
      2. 800VDC 직류 전원 혁신과 광 인터커넥트(Optical Interconnect) 하드웨어
    </h3>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      배전 부문에서는 엔비디아가 교류(AC)와 직류(DC) 간 다단계 변환 손실(기존 10~15%)을 최소화하기 위해 <strong>800VDC 직류 전원 시스템</strong>의 양산 체제 전환을 본격화했습니다. 글로벌 공조사 트레인(Trane)과 전력기기 기업 이튼(Eaton)은 직류 기반 통합 표준 레퍼런스 디자인을 공개했습니다.
    </p>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      동시에 140kW급 랙 내 수백 가닥의 구리선 무게(수백 kg)와 신호 감쇄를 해결하기 위해 빛으로 칩 간 데이터를 전송하는 <strong>광 트랜시버(Optical Transceiver)</strong>와 DapuStor의 512TB 초고용량 QLC SSD가 데이터센터의 차세대 표준 하드웨어로 확고히 자리 잡았습니다.
    </p>
  </div>

  <!-- 섹션 3: 데이터센터 전력망 & 에너지 패러다임 -->
  <div style='margin-bottom: 50px;'>
    <h2 style='font-size: 22px; font-weight: 800; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 12px; margin-bottom: 22px;'>
      🔋 섹션 3: 데이터센터 전력망 &amp; 에너지 인프라 슈퍼사이클
    </h2>

    <h3 style='font-size: 18px; font-weight: 700; color: #059669; margin-top: 24px; margin-bottom: 12px;'>
      1. 기저전원 SMR 동맹의 실질적 사업화 &amp; 넥스트에라 10GW 가스발전 착공
    </h3>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      초대형 AI 데이터센터가 요구하는 24시간 무중단 전력을 공급하기 위해 무탄소 기저전원인 <strong>소형모듈원자로(SMR) 동맹</strong>이 가시적 실행 단계에 진입했습니다. SK그룹 최태원 회장과 테라파워 빌 게이츠 회장의 연쇄 회동을 거쳐 SK이노베이션, 두산에너빌리티, 현대건설이 참여하는 소듐냉각고속로 기반 '나트륨(Natrium)' 공급망 구축이 본격화되었으며, 데이터센터 전력 공급을 위한 2호 SMR 프로젝트 발표가 예고되었습니다.
    </p>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      한편 SMR 상용화 시점(2030년 전후)까지의 심각한 전력 공백을 메우기 위해 화석연료 기반 가교(Bridge) 발전도 급증하고 있습니다. 미국 최대 에너지 기업 <strong>넥스트에라(NextEra)</strong>는 주정부로부터 33억 달러(약 4조 5,000억 원)의 자금을 확보하고 10GW 규모의 신규 천연가스 발전소 건설에 돌입했습니다. 아마존 역시 계통 연계 지연을 우회하고자 데이터센터 부지 내 전용 가스발전소를 직접 구축하는 자가발전(IPP) 전략을 선택했습니다.
    </p>

    <!-- 원문 인용구 박스 -->
    <div style='background-color: #ECFDF5; border-left: 4px solid #059669; padding: 18px 22px; margin: 20px 0; border-radius: 0 8px 8px 0; font-size: 14.5px; color: #065F46; line-height: 1.75;'>
      <strong>💬 빌 게이츠(Bill Gates) 테라파워 의장 및 산자부 관계자 성명:</strong><br/>
      <em>"인공지능의 발전 속도는 전력망의 공급 능력을 훨씬 앞서가고 있습니다. 탄소 배출 없는 24시간 기저전력을 안정적으로 공급할 수 있는 유일한 대안은 SMR이며, 한국의 세계 최고 수준 원전 엔지니어링 밸류체인은 테라파워 프로젝트 성공의 핵심 열쇠입니다."</em><br/>
      <span style='font-size: 13px; color: #047857;'>— 세계일보 및 테라파워 공식 성명서 인용</span>
    </div>

    <h3 style='font-size: 18px; font-weight: 700; color: #059669; margin-top: 28px; margin-bottom: 12px;'>
      2. 대한민국 제12차 전기본 27GW 상향 &amp; K-전력기기 수주 잭팟
    </h3>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      대한민국 정부의 <strong>제12차 전력수급기본계획(전기본)</strong>은 AI 데이터센터 및 반도체 클러스터의 전력 수요 폭증을 반영하여, 2040년 최대 전력 수요를 기존 전망치 대비 <strong>27GW 상향된 165GW</strong>로 공식 조정했습니다. 27GW는 대형 원자력 발전소 약 17~19기에 해당하는 막대한 용량입니다.
    </p>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      이 같은 글로벌 전력망 슈퍼사이클에 힘입어 국내 전력기기 업계의 실적도 폭발했습니다. <strong>㈜LS</strong>는 상반기 영업이익 1조 717억 원과 수주잔고 20조 원을 달성했으며, <strong>가온전선</strong>은 미국 AI 클라우드 데이터센터에 2,000억 원 규모의 대용량 버스덕트(Busduct) 공급 계약을 성사시켰습니다. HD현대일렉트릭과 효성중공업 미국 법인 역시 2029년까지의 물량을 조기 완판하며 전력망 핵심 공급자로 확고히 자리매김했습니다.
    </p>
  </div>

  <!-- 섹션 4: 규제 장벽 & 환경 상생 과제 -->
  <div style='margin-bottom: 50px;'>
    <h2 style='font-size: 22px; font-weight: 800; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 12px; margin-bottom: 22px;'>
      ⚖️ 섹션 4: 글로벌 그리드락(Gridlock), 인허가 모라토리엄 및 상생 모델
    </h2>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      데이터센터 급증으로 인한 전력망 포화와 소음, 막대한 수자원 소모는 미국과 유럽 등지에서 <strong>500개 이상의 지자체가 건설 모라토리엄(일시 중단)</strong>을 선언하는 사태로 번졌습니다. 미국 인디애나폴리스, 위스콘신 치페와, 버지니아비치 등이 인허가를 전격 동결했습니다.
    </p>
    <p style='font-size: 15px; margin-bottom: 14px;'>
      제도권 규제도 급물살을 타 미 연방 의회의 <em>'데이터센터 권리장전(Bill of Rights)'</em> 발의, 펜실베이니아주의 패스트트랙 NDA(비밀유지계약) 금지 행정명령 서명, 테네시계곡개발청(TVA)의 데이터센터 전용 전기요금 인상이 확정되었습니다.
    </p>

    <!-- 원문 인용구 박스 -->
    <div style='background-color: #F8FAFC; border-left: 4px solid #EF4444; padding: 18px 22px; margin: 20px 0; border-radius: 0 8px 8px 0; font-size: 14.5px; color: #334155; line-height: 1.75;'>
      <strong>💬 조쉬 샤피로(Josh Shapiro) 펜실베이니아 주지사 성명 인용:</strong><br/>
      <em>"데이터센터 개발사들이 지역사회의 전력망과 수자원을 무단 점유하며 질주하는 행위(Running roughshod)를 더 이상 좌시하지 않을 것입니다. 비밀유지계약(NDA) 뒤에 숨는 관행을 원천 금지하고, 자체 발전과 지역 상생 방안을 증명하지 못하는 프로젝트는 인허가를 받을 수 없습니다."</em><br/>
      <span style='font-size: 13px; color: #64748B;'>— 펜실베이니아 주정부 공식 행정명령 브리핑</span>
    </div>

    <p style='font-size: 15px; margin-bottom: 14px;'>
      이에 대응해 데이터센터 폐열을 지역 사회 25만 명 난방으로 공급하는 <strong>핀란드식 상생 모델</strong>과 구글이 발표한 <strong>3,000만 달러 규모 오클라호마 수자원 복원 프로젝트</strong> 등 환경과 공존하는 지속 가능한 인프라 아키텍처가 필수 요건으로 부상했습니다.
    </p>
  </div>

  <!-- 주간 핵심 비교 요약 테이블 -->
  <div style='margin-bottom: 44px;'>
    <h3 style='font-size: 18px; font-weight: 700; color: #0F172A; margin-bottom: 14px;'>
      📋 8월 3주차 주요 지표 및 산업 핵심 이벤트 매트릭스
    </h3>
    <div style='overflow-x: auto;'>
      <table style='width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;'>
        <thead>
          <tr style='background-color: #1E293B; color: #FFFFFF;'>
            <th style='padding: 12px 14px; border: 1px solid #CBD5E1;'>핵심 영역</th>
            <th style='padding: 12px 14px; border: 1px solid #CBD5E1;'>주요 기업 / 주체</th>
            <th style='padding: 12px 14px; border: 1px solid #CBD5E1;'>핵심 수치 및 계약 규모</th>
            <th style='padding: 12px 14px; border: 1px solid #CBD5E1;'>인프라 아키텍처적 의미</th>
          </tr>
        </thead>
        <tbody>
          <tr style='background-color: #FFFFFF;'>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0; font-weight: 700; color: #1E40AF;'>인프라 금융</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>NVIDIA / OpenAI / SB Energy</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>1,050억 달러 보증 / 30억 달러 지분 투자</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>GPU 역임차 보증을 통한 독점 턴키 생태계 구축</td>
          </tr>
          <tr style='background-color: #F8FAFC;'>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0; font-weight: 700; color: #1E40AF;'>하이퍼스케일</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>AWS / Oracle / CoreWeave</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>AWS 슈리브포트 180억 달러 / 22개 리전 연동</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>초저지연 전용 인터커넥트 및 Vera Rubin 선점</td>
          </tr>
          <tr style='background-color: #FFFFFF;'>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0; font-weight: 700; color: #D97706;'>액체냉각 공조</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>삼성전자 / NHN클라우드</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>광주 2,400억 원 / B200 7,656장 D2C</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>CDU 라인 국산화 및 전력 13.9% 절감 검증</td>
          </tr>
          <tr style='background-color: #F8FAFC;'>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0; font-weight: 700; color: #059669;'>전력망 &amp; SMR</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>테라파워-SK / NextEra / 가온전선</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>10GW 가스발전 / 2,000억 버스덕트</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>온사이트 발전 내재화 및 초고압 전력 기자재 공급망 장악</td>
          </tr>
          <tr style='background-color: #FFFFFF;'>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0; font-weight: 700; color: #DC2626;'>그리드락 규제</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>미 PJM / 펜실베이니아주 / TVA</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>50MW+ BYOP 의무화 / 전용 차등 요금제</td>
            <td style='padding: 12px 14px; border: 1px solid #E2E8F0;'>환경 규제 대응 및 지역 상생 폐열 난방 필수화</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- 주간 큐레이션 링크 -->
  <div style='background-color: #F1F5F9; border-radius: 12px; padding: 24px 28px; margin-top: 36px;'>
    <h3 style='font-size: 17px; font-weight: 700; color: #334155; margin-top: 0; margin-bottom: 14px;'>
      🔗 8월 3주차 주요 큐레이션 원문 링크
    </h3>
    <ul style='margin: 0; padding-left: 20px; font-size: 14px; color: #475569; line-height: 1.9;'>
      <li>[금융/투자] <a href='https://www.aitimes.com/news/articleView.html?idxno=214001' target='_blank' style='color: #2563EB; text-decoration: underline;'>엔비디아, SB 에너지 30억 달러 투자 및 오픈AI DC 신용보증 확정 (AI타임스)</a></li>
      <li>[클라우드] <a href='https://n.news.naver.com/mnews/article/092/0002434289' target='_blank' style='color: #2563EB; text-decoration: underline;'>오라클-AWS, 글로벌 22개 리전 Exadata 연동 서비스 전면 개방 (ZDNet Korea)</a></li>
      <li>[전력망/에너지] <a href='https://www.segye.com/newsView/20260820521179' target='_blank' style='color: #2563EB; text-decoration: underline;'>제12차 전력수급기본계획, 2040년 목표 27GW 상향된 165GW 조정 (세계일보)</a></li>
      <li>[냉각/공조] <a href='https://www.mk.co.kr/news/business/12129372' target='_blank' style='color: #2563EB; text-decoration: underline;'>삼성전자, 광주에 2,400억 원 투입 HVAC·CDU 액체냉각 라인 착공 (매일경제)</a></li>
      <li>[네오클라우드] <a href='https://pulse2.com' target='_blank' style='color: #2563EB; text-decoration: underline;'>CoreWeave and HRT Sign Multi-Billion-Dollar Deal for NVIDIA Vera Rubin NVL72 (Pulse 2.0)</a></li>
    </ul>
  </div>

</div>
