---
id: 2026-09-10-infra-glossary
title: "[인프라 용어사전] PPA (Power Purchase Agreement) - AI 하이퍼스케일러의 무탄소 전력 직도입과 기저부하 확보 메커니즘"
date: 2026-09-10
time: "05:57"
category: Terminology
status: published
summary: "📌 1. 30초 핵심 요약 & 개념 정의 PPA(Power Purchase Agreement, 전력구매계약)는 데이터센터를 운영하는 대규모 전력 수용가(소비 기업)와 전력 발전 사업자(원자력, 신재생에너지 발전사 등)가 사전에 합의된 고정 단가와 계약 기간(통상 10년~25년)을 바탕으로 전력을 직접 거래하는 장기 전력 조달 계약 아키텍처입니다. 일반 상업"
labels:
  - 인프라용어사전
  - IT백과사전
  - PPA
  - 전력구매계약
  - 데이터센터
  - 구글
---

<div style='font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; line-height: 1.8; color: #1E293B;'>

  <!-- 1. 30초 핵심 요약 & 개념 정의 -->
  <div style='background-color: #F8FAFC; border-left: 4px solid #0EA5E9; padding: 20px; border-radius: 8px; margin-bottom: 28px;'>
    <h2 style='margin-top: 0; margin-bottom: 12px; color: #0369A1; font-size: 20px;'>📌 1. 30초 핵심 요약 & 개념 정의</h2>
    <p style='margin-bottom: 10px;'><strong>PPA(Power Purchase Agreement, 전력구매계약)</strong>는 데이터센터를 운영하는 대규모 전력 수용가(소비 기업)와 전력 발전 사업자(원자력, 신재생에너지 발전사 등)가 사전에 합의된 고정 단가와 계약 기간(통상 10년~25년)을 바탕으로 전력을 직접 거래하는 <strong>장기 전력 조달 계약 아키텍처</strong>입니다.</p>
    <p style='margin-bottom: 0;'>일반 상업용 빌딩이 공공 전력망 사업자의 표준 요금제에 종속되어 매월 변동하는 전력 단가를 지불하는 구조라면, 하이퍼스케일 데이터센터의 PPA는 <strong>20년 치 대규모 청정 전력 단가와 공급 라인을 사전 고정해 두는 '전력 직도입 전용 파이프라인'</strong>에 비유할 수 있습니다. AI 클러스터 구축으로 기가와트(GW)급 전력 소모가 불가피해진 빅테크 기업들이 전력 시장 가격 변동성을 헷지하고, Scope 2 온실가스 배출 규제 및 무탄소 전력 인증(24/7 CFE)을 달성하기 위한 필수 인프라 전략으로 정착했습니다.</p>
  </div>

  <!-- 2. 작동 원리 & 메커니즘 -->
  <div style='margin-bottom: 32px;'>
    <h2 style='border-left: 4px solid #3B82F6; padding-left: 12px; color: #1E3A8A; font-size: 20px; margin-bottom: 16px;'>⚙️ 2. 작동 원리 & 메커니즘</h2>
    <p style='margin-bottom: 14px;'>데이터센터 환경에서 PPA는 전력이 전달되는 물리적 계통 구조와 대금 정산 방식에 따라 크게 세 가지 형태로 구현됩니다.</p>
    <ul style='padding-left: 20px; margin-bottom: 18px;'>
      <li style='margin-bottom: 8px;'><strong>물리적 PPA (Physical / Sleeved PPA):</strong> 발전소에서 생산된 전력이 송전망(Transmission Grid)을 거쳐 데이터센터 수전 시설로 직접 공급되는 구조입니다. 전력망 운영자(Grid Operator)에게 송전 수수료(Wheeling Fee)를 지불하며, 물리적 전력 공급과 환경 인증서(REC, GO)가 패키지로 수용가에 인도됩니다.</li>
      <li style='margin-bottom: 8px;'><strong>가상/재무적 PPA (Virtual / Financial PPA):</strong> 발전소와 데이터센터 간 물리적 배선 연결 없이 체결되는 파생상품 성격의 계약입니다. 데이터센터는 현지 전력 시장에서 전력을 구매하되, 발전 사업자와 '차액 정산 계약(Contract for Difference, CfD)'을 맺어 도매 전력 가격(SMP)과 사전에 약정한 PPA 고정 단가 간의 차액만 현금 정산하고 환경 인증서만 수취합니다.</li>
      <li style='margin-bottom: 8px;'><strong>24/7 무탄소(CFE) 매칭 PPA:</strong> 연간 총발전량만 단순 합산하여 상쇄하는 기존 방식을 탈피하여, 데이터센터의 시간대별(Hourly) 전력 소비 곡선과 발전소의 실제 발전 프로파일을 1:1로 실시간 일치시키는 최신 PPA 모델입니다. 간헐성이 존재하는 태양광·풍력 외에 원자력과 같은 연속 기저부하(Baseload) 전력원이 필수적으로 결합됩니다.</li>
    </ul>

    <h3 style='color: #334155; font-size: 16px; margin-top: 20px; margin-bottom: 12px;'>📊 전력 조달 모델 비교 분석</h3>
    <div style='overflow-x: auto;'>
      <table style='width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; margin-bottom: 16px;'>
        <thead>
          <tr style='background-color: #F1F5F9; border-bottom: 2px solid #CBD5E1;'>
            <th style='padding: 12px 14px; color: #334155;'>비교 항목</th>
            <th style='padding: 12px 14px; color: #334155;'>물리적 PPA (Physical)</th>
            <th style='padding: 12px 14px; color: #334155;'>가상 PPA (Virtual)</th>
            <th style='padding: 12px 14px; color: #334155;'>일반 유틸리티 요금제</th>
          </tr>
        </thead>
        <tbody>
          <tr style='border-bottom: 1px solid #E2E8F0;'>
            <td style='padding: 12px 14px; font-weight: 600;'>물리적 전력 인입</td>
            <td style='padding: 12px 14px;'>직접 인입 또는 송전망 경유 인도</td>
            <td style='padding: 12px 14px;'>물리적 연결 없음 (금융 정산)</td>
            <td style='padding: 12px 14px;'>공용 배전망 기본 인입</td>
          </tr>
          <tr style='background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;'>
            <td style='padding: 12px 14px; font-weight: 600;'>단가 결정 방식</td>
            <td style='padding: 12px 14px;'>장기 고정 계약 단가 + 망 이용료</td>
            <td style='padding: 12px 14px;'>도매 시장 가격 대비 차액 정산 (CfD)</td>
            <td style='padding: 12px 14px;'>정부/유틸리티 인가 규제 요금</td>
          </tr>
          <tr style='border-bottom: 1px solid #E2E8F0;'>
            <td style='padding: 12px 14px; font-weight: 600;'>환경 인증서(REC)</td>
            <td style='padding: 12px 14px;'>전력과 동시 이전 및 소유</td>
            <td style='padding: 12px 14px;'>인증서(REC)만 별도 소유권 이전</td>
            <td style='padding: 12px 14px;'>미포함 (별도 녹색요금 추가 필요)</td>
          </tr>
          <tr style='background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;'>
            <td style='padding: 12px 14px; font-weight: 600;'>전력 가격 변동 헷지</td>
            <td style='padding: 12px 14px;'>10~25년간 단가 변동 완벽 차단</td>
            <td style='padding: 12px 14px;'>도매 가격 변동 위험 상호 헷지</td>
            <td style='padding: 12px 14px;'>원자재/요금 인상 리스크 전면 노출</td>
          </tr>
          <tr style='border-bottom: 1px solid #E2E8F0;'>
            <td style='padding: 12px 14px; font-weight: 600;'>계통망(Grid) 종속성</td>
            <td style='padding: 12px 14px;'>동일 송전 권역 및 연계 용량 필수</td>
            <td style='padding: 12px 14px;'>지역적 연계 제약 상대적 완화</td>
            <td style='padding: 12px 14px;'>해당 수전 지역 계통 용량에 국한</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- 3. 오늘자 실제 적용 사례 -->
  <div style='margin-bottom: 32px;'>
    <h2 style='border-left: 4px solid #10B981; padding-left: 12px; color: #065F46; font-size: 20px; margin-bottom: 16px;'>🏢 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계)</h2>
    <p style='margin-bottom: 12px;'>금일 보도된 글로벌 인프라 동향에 따르면, <strong>구글은 핀란드에 130억 유로(약 20조 원)를 투입해 3개 신규 하이퍼스케일 데이터센터를 구축</strong>하기로 결정하고, 현지 국영 에너지 기업인 <strong>포르툼(Fortum)과 22년 장기 원자력 PPA를 전격 체결</strong>했습니다.</p>
    <p style='margin-bottom: 12px;'>이번 계약은 핀란드 로비사(Loviisa) 원자력 발전소의 발전 용량을 기반으로 체결된 초장기 PPA로, 차세대 제미나이(Gemini) 대규모 언어 모델 연산 클러스터를 가동하기 위한 <strong>연속 무탄소 기저부하(Baseload Power)를 선제 확보</strong>했다는 점에서 공학적 의의가 큽니다.</p>
    <p style='margin-bottom: 0;'>태양광이나 풍력 등 재생에너지는 기후 조건에 따른 발전 출력 급변(간헐성) 문제가 있어, 연중무휴 최대 부하(Full Load)로 동작하는 수만 장의 초고밀도 가속기 랙을 안정적으로 지탱하기 어렵습니다. 구글은 22년 장기 원전 PPA를 통해 계통 정전 위험이 없는 무탄소 전력을 메가와트(MW) 단위로 직접 수전함으로써, 전력 공급망의 수직계열화와 전력 단가 인플레이션 억제를 동시에 달성했습니다.</p>
  </div>

  <!-- 4. 기술적 장단점 및 도입 시 고려사항 -->
  <div style='margin-bottom: 32px;'>
    <h2 style='border-left: 4px solid #F59E0B; padding-left: 12px; color: #92400E; font-size: 20px; margin-bottom: 16px;'>⚖️ 4. 기술적 장단점 및 도입 시 고려사항</h2>
    <div style='display: grid; grid-template-columns: 1fr; gap: 16px;'>
      <div style='background-color: #FEF3C7; padding: 16px; border-radius: 6px;'>
        <h4 style='margin-top: 0; margin-bottom: 8px; color: #92400E;'>기술적·운영적 이점</h4>
        <ul style='margin: 0; padding-left: 18px;'>
          <li style='margin-bottom: 6px;'><strong>예측 가능한 OPEX 구조:</strong> 10~25년간 고정 전력 단가를 확정하여 글로벌 에너지 시장의 가격 급등 위험으로부터 연간 수천억 원 단위의 전력 운영비를 보호합니다.</li>
          <li style='margin-bottom: 6px;'><strong>공인된 탈탄소 데이터센터 실현:</strong> 온실가스 프로토콜(GHG Protocol) 기준 Scope 2 배출량을 제로화하고 글로벌 24/7 CFE 요건을 공식 충족합니다.</li>
          <li style='margin-bottom: 0;'><strong>송전 선점권 확보:</strong> 발전소 증설 단계에서 수전 용량을 사전 배정받아 신규 캠퍼스의 인입 전력 허가 대기 기간을 대폭 단축할 수 있습니다.</li>
        </ul>
      </div>
      <div style='background-color: #F1F5F9; padding: 16px; border-radius: 6px;'>
        <h4 style='margin-top: 0; margin-bottom: 8px; color: #334155;'>인프라 구축 시 제약 및 고려사항</h4>
        <ul style='margin: 0; padding-left: 18px;'>
          <li style='margin-bottom: 6px;'><strong>베이시스 리스크(Basis Risk):</strong> 가상 PPA(VPPA) 계약 체결 후 시장 도매 전력 가격이 PPA 계약 단가 밑으로 장기 하락할 경우, 데이터센터 운영사가 발전사에 지속적인 현금 차액을 보전해야 하는 재무 위험이 발생합니다.</li>
          <li style='margin-bottom: 6px;'><strong>송전망 혼잡 및 출력 제어(Curtailment):</strong> 물리적 PPA의 경우 발전소와 데이터센터 사이 송전선로의 송전 용량 병목이 발생하면 계약된 발전량을 온전히 수전하지 못할 수 있으므로 계통 연계 타당성 평가가 선행되어야 합니다.</li>
          <li style='margin-bottom: 0;'><strong>단일 전원 의존성 한계:</strong> 신재생 전원 단독 PPA는 야간이나 무풍 시간대 전력 공백이 발생하므로, 안정적인 기저부하 발전원(원자력, 지열 등)과의 포트폴리오 믹스 설계가 필수적입니다.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 5. 엔지니어/실무자를 위한 1줄 인사이트 -->
  <div style='background-color: #0F172A; color: #F8FAFC; padding: 18px 20px; border-radius: 8px;'>
    <p style='margin: 0; font-size: 15px;'><strong>💡 실무 엔지니어링 인사이트:</strong> 차세대 AI 인프라의 확장성은 칩 단위의 연산 효율(FLOPS/Watt)에만 머물지 않으며, 20년 이상의 고밀도 전력 수요를 무탄소 고정비로 안전하게 결속시키는 <strong>PPA 전력망 연계 아키텍처</strong>가 데이터센터 전체 가동률과 총소유비용(TCO)을 좌우하는 1차 승부처입니다.</p>
  </div>

</div>