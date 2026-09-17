---
id: 2026-09-18-infra-glossary
title: "[인프라 용어사전] SMR (Small Modular Reactor) - 송전망 병목과 전력비 규제를 돌파하는 AI 데이터센터 온사이트 기저전원"
date: 2026-09-18
time: "05:53"
category: Terminology
status: published
summary: "전력 인프라 아키텍처 SMR (Small Modular Reactor, 소형 모듈 원자로) 공공 전력망 대기열과 계통 보강 규제를 우회하여 AI 데이터센터에 24/7 무탄소 기저전력을 직결하는 차세대 분산 원자력 발전 시스템 📌 1. 30초 핵심 요약 & 개념 정의 직관적 비유: 수백 킬로미터 떨어진 대형 댐에서 긴 송수관로를 통해 물을 끌어오는 중앙 집중"
labels:
  - 인프라용어사전
  - IT백과사전
  - SMR
  - 소형모듈원전
  - AWS
  - 데이터센터
  - 전력인프라
---

<div style='font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.8; color: #1E293B; max-width: 840px; margin: 0 auto;'>

  <!-- 헤더 배너 카드 -->
  <div style='background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); border-radius: 16px; padding: 28px; margin-bottom: 32px; color: #FFFFFF; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);'>
    <div style='display: inline-block; background: #2563EB; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; letter-spacing: 0.5px;'>전력 인프라 아키텍처</div>
    <h1 style='font-size: 26px; font-weight: 800; margin: 0 0 10px 0; line-height: 1.4; color: #F8FAFC;'>SMR (Small Modular Reactor, 소형 모듈 원자로)</h1>
    <p style='font-size: 15px; margin: 0; color: #94A3B8;'>공공 전력망 대기열과 계통 보강 규제를 우회하여 AI 데이터센터에 24/7 무탄소 기저전력을 직결하는 차세대 분산 원자력 발전 시스템</p>
  </div>

  <!-- 1. 30초 핵심 요약 & 개념 정의 -->
  <h2 style='border-left: 4px solid #2563EB; padding-left: 14px; margin: 32px 0 16px 0; font-size: 20px; font-weight: 700; color: #0F172A;'>📌 1. 30초 핵심 요약 & 개념 정의</h2>
  
  <blockquote style='background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 16px 20px; margin: 16px 0 20px 0; border-radius: 0 10px 10px 0; font-size: 15px; color: #1E40AF; line-height: 1.7;'>
    <strong>직관적 비유:</strong> 수백 킬로미터 떨어진 대형 댐에서 긴 송수관로를 통해 물을 끌어오는 중앙 집중식 상수도가 대형 상용 원전이라면, <strong>SMR은 데이터센터 건물 바로 옆에 조립식으로 설치하는 초고성능 독립 정수기이자 온사이트 전용 발전기</strong>입니다.
  </blockquote>

  <div style='background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 22px; margin-bottom: 28px;'>
    <p style='margin: 0 0 14px 0; font-size: 15px; color: #334155;'>
      <strong>공학적 표준 정의:</strong> SMR(Small Modular Reactor)은 국제원자력기구(IAEA) 기준 <strong>전기출력 300MWe 이하(열출력 약 1,000MWt 이하)</strong> 규모의 원자로 시스템을 의미합니다. 기존 1,000~1,400MWe급 대형 원자력 발전소와 달리 원자로 압력용기(RPV), 증기발생기, 냉각재 펌프, 가압기 등 1차 계통 핵심 주기기를 단일 용기 내에 집적한 <strong>일체형(Integral) 구조</strong>를 채택합니다.
    </p>
    <p style='margin: 0; font-size: 15px; color: #334155;'>
      현장에서 장기간의 토목 콘크리트 타설을 거치는 대신 <strong>제조 공장에서 모듈 단위로 정밀 제작(Shop Fabrication)</strong>된 후 규격화된 트럭, 철도, 바지선을 통해 데이터센터 부지로 운송되어 현장에서 레고 블록처럼 결합(Modular Construction)됩니다. 이를 통해 공사 기간을 대폭 단축하고, 송전망 대기열(Interconnection Queue) 문제를 우회하는 독립형 온사이트 기저전원으로 주목받고 있습니다.
    </p>
  </div>

  <!-- 2. 작동 원리 & 메커니즘 -->
  <h2 style='border-left: 4px solid #2563EB; padding-left: 14px; margin: 36px 0 16px 0; font-size: 20px; font-weight: 700; color: #0F172A;'>⚙️ 2. 작동 원리 & 메커니즘</h2>

  <div style='display: grid; grid-template-columns: 1fr; gap: 16px; margin-bottom: 24px;'>
    <div style='background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);'>
      <h3 style='margin: 0 0 10px 0; font-size: 16px; font-weight: 700; color: #1E293B;'>1) 일체형 원자로 용기(Integral RPV)와 냉각재 배관 제거</h3>
      <p style='margin: 0; font-size: 14.5px; color: #475569;'>대형 원전에서 방사능 누출 사고의 주요 원인이 되는 원자로와 증기발생기 간의 대형 연결 배관을 완전히 제거했습니다. 단일 압력용기 내부에 노심(Core), 증기발생기, 냉각재 유로를 통합 배치함으로써 배관 파단에 따른 냉각재 상실 사고(LOCA: Loss of Coolant Accident) 가능성을 물리적으로 차단합니다.</p>
    </div>
    <div style='background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);'>
      <h3 style='margin: 0 0 10px 0; font-size: 16px; font-weight: 700; color: #1E293B;'>2) 완전 피동형 안전계통 (Passive Safety Systems)</h3>
      <p style='margin: 0; font-size: 14.5px; color: #475569;'>외부 전력 공급이 중단되거나 비상 디젤 발전기가 고장 나더라도, 기계식 펌프나 운전원의 개입 없이 중력, 자연 대류, 증발, 복사 등 자연 물리 법칙에 의해 원자로를 냉각합니다. 노심 잔열을 대형 수조로 자연 방출하여 전원 상실 상태에서도 수 주 이상 안전 상태를 유지하는 무인 고유 안전성(Walk-away Safety)을 구현합니다.</p>
    </div>
    <div style='background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);'>
      <h3 style='margin: 0 0 10px 0; font-size: 16px; font-weight: 700; color: #1E293B;'>3) 3세대+ 경수로형 vs 4세대 비경수로형 분화</h3>
      <p style='margin: 0; font-size: 14.5px; color: #475569;'>기존 상용 경수로(LWR) 기술을 소형화한 3세대+ 모델(뉴스케일 등)과 더불어, 액체 금속(소듐)이나 고온 헬륨 가스를 냉각재로 사용하는 4세대 비경수로 모델(오클로, 엑스에너지 등)이 등장했습니다. 4세대 모델은 상압 운전이 가능해 고압 파열 위험이 없고, 500~800°C의 고온 열을 생산하여 열역학적 발전 효율을 극대화합니다.</p>
    </div>
  </div>

  <!-- 비교 분석 표 -->
  <div style='margin: 28px 0; overflow-x: auto;'>
    <div style='font-size: 15px; font-weight: 700; color: #0F172A; margin-bottom: 10px;'>📊 대형 상용 원전 vs 3세대+ 경수로형 SMR vs 4세대 비경수로형 SMR 비교 분석</div>
    <table style='width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px; background: #FFFFFF; border-radius: 8px; overflow: hidden; border: 1px solid #CBD5E1;'>
      <thead>
        <tr style='background: #F1F5F9; color: #0F172A; border-bottom: 2px solid #CBD5E1;'>
          <th style='padding: 12px 14px; font-weight: 700;'>비교 항목</th>
          <th style='padding: 12px 14px; font-weight: 700;'>대형 상용 원전 (기존)</th>
          <th style='padding: 12px 14px; font-weight: 700;'>3세대+ SMR (경수로형)</th>
          <th style='padding: 12px 14px; font-weight: 700;'>4세대 SMR (소듐/가스형)</th>
        </tr>
      </thead>
      <tbody>
        <tr style='border-bottom: 1px solid #E2E8F0;'>
          <td style='padding: 12px 14px; font-weight: 600; background: #F8FAFC;'>전기 출력 규모</td>
          <td style='padding: 12px 14px;'>1,000 ~ 1,400 MWe</td>
          <td style='padding: 12px 14px;'>50 ~ 300 MWe (모듈당)</td>
          <td style='padding: 12px 14px;'>15 ~ 100 MWe (초소형)</td>
        </tr>
        <tr style='border-bottom: 1px solid #E2E8F0;'>
          <td style='padding: 12px 14px; font-weight: 600; background: #F8FAFC;'>기기 배치 방식</td>
          <td style='padding: 12px 14px;'>배관 연결 분산 배치형</td>
          <td style='padding: 12px 14px;'>단일 압력용기 일체형(RPV)</td>
          <td style='padding: 12px 14px;'>풀(Pool)형 초소형 일체화</td>
        </tr>
        <tr style='border-bottom: 1px solid #E2E8F0;'>
          <td style='padding: 12px 14px; font-weight: 600; background: #F8FAFC;'>건설 및 조달 방식</td>
          <td style='padding: 12px 14px;'>현장 맞춤형 타설 (7~10년)</td>
          <td style='padding: 12px 14px;'>공장 모듈 제작 후 결합 (3~4년)</td>
          <td style='padding: 12px 14px;'>완전 패키징 완제품 직송 (2~3년)</td>
        </tr>
        <tr style='border-bottom: 1px solid #E2E8F0;'>
          <td style='padding: 12px 14px; font-weight: 600; background: #F8FAFC;'>비상 안전 계통</td>
          <td style='padding: 12px 14px;'>능동형 (비상 펌프·발전기 필수)</td>
          <td style='padding: 12px 14px;'>피동형 (자연 순환·수조 냉각)</td>
          <td style='padding: 12px 14px;'>피동형 고유안전 (상압 자연방열)</td>
        </tr>
        <tr>
          <td style='padding: 12px 14px; font-weight: 600; background: #F8FAFC;'>데이터센터 연계성</td>
          <td style='padding: 12px 14px;'>광역 송전망 경유 필수</td>
          <td style='padding: 12px 14px;'>캠퍼스 변전소 직접 연계 가능</td>
          <td style='padding: 12px 14px;'>부지 내 온사이트 직결(BTM) 최적</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 3. 오늘자 실제 적용 사례 -->
  <h2 style='border-left: 4px solid #2563EB; padding-left: 14px; margin: 36px 0 16px 0; font-size: 20px; font-weight: 700; color: #0F172A;'>🏢 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계)</h2>
  
  <div style='background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 22px; margin-bottom: 28px;'>
    <h3 style='margin: 0 0 12px 0; font-size: 16px; font-weight: 700; color: #1E293B;'>미 하원 전력비 전가 차단법(Ratepayer Protection Act) 가결과 SMR 급부상</h3>
    <p style='margin: 0 0 14px 0; font-size: 14.5px; color: #334155;'>
      미국 연방 하원은 인공지능 데이터센터 신규 연결로 인한 대규모 송전망 보강 및 변전 설비 증설 비용을 일반 가정의 전기요금으로 전가하지 못하도록 강제하는 <strong>'소비자 보호법(Ratepayer Protection Act)'을 417대 3의 압도적 찬성</strong>으로 통과시켰습니다. 이 법안으로 인해 빅테크 하이퍼스케일러는 수천억 원에 달하는 공공 계통 연계 인프라 비용을 직접 부담해야 하는 강력한 규제 리스크에 직면했습니다.
    </p>
    <p style='margin: 0 0 14px 0; font-size: 14.5px; color: #334155;'>
      공공 전력망의 5~8년 송전 대기열과 계통 보강 분담금 부담을 회피하기 위해, 공공 전력망을 통하지 않고 데이터센터 구역 내에서 전력을 직접 생산·소비하는 <strong>비하인드 더 미터(Behind-the-Meter, BTM) 독립형 기저전원</strong>이 유일한 구조적 대안으로 부각되었습니다. 이에 따라 소형 모듈 원자로 개발사인 <strong>오클로(Oklo)의 주가가 13% 폭등하고, 뉴스케일 파워(NuScale Power)가 10% 급등</strong>하는 등 SMR 시장이 직접적인 제도적 수혜를 입었습니다.
    </p>
    <p style='margin: 0; font-size: 14.5px; color: #334155;'>
      아마존(AWS)은 이미 엑스에너지(X-energy)와 협력하여 5GW 이상의 SMR 전력 조달 로드맵을 구축하고 있으며, 최근 제너락(Generac)과의 80억 달러 백업 전원 계약과 더불어 원자력 기반 독립 캠퍼스 구축에 박차를 가하고 있습니다. 구글 역시 카이로스 파워(Kairos Power)와 500MW급 다중 SMR 공급 계약을 체결하여 랙당 100kW가 넘는 차세대 고밀도 AI 클러스터 전력을 자체적으로 충당하는 아키텍처를 실체화하고 있습니다.
    </p>
  </div>

  <!-- 4. 기술적 장단점 및 도입 시 고려사항 -->
  <h2 style='border-left: 4px solid #2563EB; padding-left: 14px; margin: 36px 0 16px 0; font-size: 20px; font-weight: 700; color: #0F172A;'>⚖️ 4. 기술적 장단점 및 도입 시 고려사항</h2>

  <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;'>
    <div style='background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 12px; padding: 20px;'>
      <h3 style='margin: 0 0 12px 0; font-size: 16px; font-weight: 700; color: #166534;'>👍 핵심 엔지니어링 강점</h3>
      <ul style='margin: 0; padding-left: 18px; font-size: 14px; color: #14532D; line-height: 1.7;'>
        <li><strong>무탄소 고이용률 기저부하:</strong> 태양광·풍력의 치명적 한계인 간헐성 없이 90% 이상의 설비이용률로 24시간 안정적인 AI 전력 공급</li>
        <li><strong>모듈형 단계적 증설:</strong> 50~100MW 단위로 IT 랙 수요 증가 속도에 맞춰 모듈을 병렬 추가하여 초기 막대한 CAPEX 부담 완화</li>
        <li><strong>극소화된 부지 면적:</strong> 대형 원전 대비 1/100 이하의 부지 면적으로 구축 가능하며, 공랭식 적용 시 내륙 지역에도 설치 가능</li>
      </ul>
    </div>
    <div style='background: #FEF2F2; border: 1px solid #FECACA; border-radius: 12px; padding: 20px;'>
      <h3 style='margin: 0 0 12px 0; font-size: 16px; font-weight: 700; color: #991B1B;'>⚠️ 현장 도입 시 제약 및 과제</h3>
      <ul style='margin: 0; padding-left: 18px; font-size: 14px; color: #7F1D1D; line-height: 1.7;'>
        <li><strong>HALEU 연료 공급망 병목:</strong> 4세대 고속로에 필수적인 5~20% 농축 우라늄(HALEU)의 글로벌 공급망 제한과 수급 불안정성</li>
        <li><strong>원자력 규제 인허가 기간:</strong> 원자력규제위원회(NRC) 등의 표준 설계 인허가(Design Certification) 획득 및 부지 승인 지연 리스크</li>
        <li><strong>물리적 방호 및 폐기물 관리:</strong> 데이터센터 부지 내 엄격한 방사성 물질 보안 경계 구역 설정과 사용후핵연료 저장 부담</li>
      </ul>
    </div>
  </div>

  <!-- 5. 엔지니어/실무자를 위한 1줄 인사이트 -->
  <h2 style='border-left: 4px solid #2563EB; padding-left: 14px; margin: 36px 0 16px 0; font-size: 20px; font-weight: 700; color: #0F172A;'>💡 5. 엔지니어/실무자를 위한 1줄 인사이트</h2>
  
  <div style='background: linear-gradient(to right, #F8FAFC, #EDF2F7); border: 1px solid #CBD5E1; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;'>
    <p style='margin: 0; font-size: 15px; font-weight: 600; color: #0F172A; line-height: 1.7;'>
      "미 하원의 전력망 증설비 전가 차단법 통과가 예고하듯, 미래 하이퍼스케일 AI 데이터센터의 성패는 수년씩 걸리는 공공 송전망 대기열을 기다리는 대신, 캠퍼스 내부에 <strong>SMR을 독립 기저전원으로 직접 직결(Behind-the-Meter)하여 계통 독립성을 확보하는 전력 아키텍처 역량</strong>에 달려 있습니다."
    </p>
  </div>

</div>