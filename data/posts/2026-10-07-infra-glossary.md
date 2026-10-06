---
id: 2026-10-07-infra-glossary
title: "[인프라 용어사전] BTM (Behind-the-Meter) - 계통 병목을 우회하는 데이터센터 온사이트 직결 전력 아키텍처"
date: 2026-10-07
time: "05:51"
category: Terminology
status: published
summary: "전력 인프라 아키텍처 기저전원 직결 하이퍼스케일 전력망 BTM (Behind-the-Meter, 계통 후면 전력 연계) 공용 송전망의 병목과 접속 대기열을 우회하여 발전원과 대규모 부하를 구내에서 직접 물리적으로 연결하는 차세대 전력 수전 체계 📌 1. 30초 핵심 요약 & 개념 정의 BTM(Behind-the-Meter, 계통 후면 전력 연계)은 전력 소"
labels:
  - 인프라용어사전
  - IT백과사전
  - BTM
  - 원자력데이터센터
  - 데이터센터전력
  - 구글
  - AWS
---

<div style='font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.85; color: #1E293B; max-width: 100%; margin: 0 auto; word-break: keep-all;'>

  <!-- 상단 헤더 배지 & 타이틀 카드 -->
  <div style='background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 32px 28px; border-radius: 16px; margin-bottom: 30px; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.25); border: 1px solid #334155;'>
    <div style='display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;'>
      <span style='background-color: #2563EB; color: #FFFFFF; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.5px;'>전력 인프라 아키텍처</span>
      <span style='background-color: #059669; color: #FFFFFF; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 9999px;'>기저전원 직결</span>
      <span style='background-color: #475569; color: #F8FAFC; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 9999px;'>하이퍼스케일 전력망</span>
    </div>
    <h1 style='color: #F8FAFC; font-size: 26px; font-weight: 800; margin: 0 0 10px 0; line-height: 1.35;'>BTM (Behind-the-Meter, 계통 후면 전력 연계)</h1>
    <p style='color: #94A3B8; font-size: 15px; margin: 0; line-height: 1.6;'>공용 송전망의 병목과 접속 대기열을 우회하여 발전원과 대규모 부하를 구내에서 직접 물리적으로 연결하는 차세대 전력 수전 체계</p>
  </div>

  <!-- 1. 30초 핵심 요약 & 개념 정의 -->
  <div style='border-left: 4px solid #2563EB; padding-left: 16px; margin-bottom: 24px;'>
    <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; margin: 0 0 6px 0;'>📌 1. 30초 핵심 요약 &amp; 개념 정의</h2>
  </div>

  <div style='background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 22px; margin-bottom: 28px;'>
    <p style='margin: 0 0 14px 0; font-size: 15px; color: #334155;'>
      <strong>BTM(Behind-the-Meter, 계통 후면 전력 연계)</strong>은 전력 소비 주체(데이터센터)가 한국전력이나 미국의 독립 계통운영기구(RTO/ISO)가 관할하는 <strong>공용 송전망(Transmission Grid)과 전력 유틸리티 계량기(Electric Utility Meter)를 거치지 않고, 발전소와 구내 또는 인접 부지에서 직접 물리적·전기적으로 선로를 연결하여 전력을 공급받는 인프라 아키텍처</strong>를 의미합니다.
    </p>
    <div style='background-color: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 14px 16px; margin-bottom: 14px;'>
      <span style='font-weight: 700; color: #1D4ED8; font-size: 14px;'>💡 직관적 비유로 이해하기:</span>
      <p style='margin: 6px 0 0 0; font-size: 14px; color: #1E40AF;'>
        도시 공용 상수도관의 수압이 낮고 배관 증설 공사에 수년이 걸릴 때, 대형 정수장 바로 옆에 자체 전용 송수관을 직접 결합하여 도심 배관 정체나 압력 손실 없이 깨끗한 물을 대용량으로 상시 직수입하는 방식에 비유할 수 있습니다.
      </p>
    </div>
    <p style='margin: 0; font-size: 14px; color: #64748B;'>
      전통적인 수전 방식인 <strong>FTM(Front-of-the-Meter, 계통 전면 연계)</strong>은 발전소가 생산한 전력을 공용 송전망으로 송출하고 데이터센터는 송전망 끝단의 계량기를 통해 전력을 구매하지만, BTM은 발전 시설의 부하 단(계량기 뒤편)에 전용 모선(Busbar)을 결합해 계통 접속 대기 시간과 송전 손실을 원천적으로 차단합니다.
    </p>
  </div>

  <!-- 2. 작동 원리 & 메커니즘 -->
  <div style='border-left: 4px solid #2563EB; padding-left: 16px; margin-bottom: 24px;'>
    <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; margin: 0 0 6px 0;'>⚙️ 2. 작동 원리 &amp; 메커니즘</h2>
  </div>

  <h3 style='font-size: 16px; font-weight: 700; color: #1E293B; margin: 0 0 12px 0;'>물리적 전력 토폴로지 및 인터페이스 설계</h3>
  <p style='font-size: 15px; color: #334155; margin-bottom: 16px;'>
    BTM 아키텍처의 핵심은 <strong>공용 송배전 계통 접속점(Point of Common Coupling, PCC)</strong>의 위치 재설계에 있습니다. 발전기 단자 변압기(GSU, Generator Step-Up Transformer) 출력단 또는 발전소 구내 스위치야드(Switchyard)에서 공용 망으로 연결되는 계량기 전단이 아닌, 구내 모선에서 분기된 전용 특고압 지중 선로(Dedicated High-Voltage Feeder)를 데이터센터 구내 변전소의 수전 패널로 직결합니다.
  </p>

  <ul style='padding-left: 20px; margin-bottom: 24px; font-size: 15px; color: #334155; line-height: 1.8;'>
    <li><strong>계통 병목 우회:</strong> 전력망 운영사의 승인을 기다려야 하는 계통 연계 대기열(Interconnection Queue, 미국 기준 평균 4~7년 소요)을 건너뛰고, 부지 내 사설 인프라 구축만으로 즉각적인 대용량 전력 수급을 확정합니다.</li>
    <li><strong>송전 손실(Line Loss) 배제:</strong> 수십~수백 킬로미터의 장거리 가공 송전선로를 통과할 때 발생하는 전력 손실(통상 3~7%)을 1% 미만으로 억제하여 에너지 효율을 극대화합니다.</li>
    <li><strong>이중 인입(Dual-feed) 신뢰성 모델:</strong> 주 전원은 BTM 직결 선로를 통해 공급받고, 공용 송전망(Grid)은 비상 백업 또는 최소 예비력 공급 선로로 연계하여 정전 시에도 끊김 없는 부하 절체(Static Transfer Switch)를 구현합니다.</li>
  </ul>

  <h3 style='font-size: 16px; font-weight: 700; color: #1E293B; margin: 0 0 12px 0;'>수전 아키텍처 기술 비교 분석</h3>
  <div style='overflow-x: auto; margin-bottom: 28px;'>
    <table style='width: 100%; border-collapse: collapse; font-size: 14px; text-align: left; border: 1px solid #CBD5E1;'>
      <thead>
        <tr style='background-color: #F1F5F9; color: #0F172A; border-bottom: 2px solid #CBD5E1;'>
          <th style='padding: 12px 14px; font-weight: 700;'>구분 항목</th>
          <th style='padding: 12px 14px; font-weight: 700;'>전통적 FTM (Front-of-the-Meter)</th>
          <th style='padding: 12px 14px; font-weight: 700;'>BTM (Behind-the-Meter) 직결</th>
          <th style='padding: 12px 14px; font-weight: 700;'>구내 자가발전 (On-site Engine)</th>
        </tr>
      </thead>
      <tbody>
        <tr style='border-bottom: 1px solid #E2E8F0; background-color: #FFFFFF;'>
          <td style='padding: 12px 14px; font-weight: 600; color: #334155;'>물리적 연계 위치</td>
          <td style='padding: 12px 14px; color: #475569;'>공용 송전망 말단 유틸리티 계량기</td>
          <td style='padding: 12px 14px; color: #1D4ED8; font-weight: 600;'>발전원 구내 모선 및 전용 피더 직결</td>
          <td style='padding: 12px 14px; color: #475569;'>데이터센터 부지 내 비상 디젤/가스기</td>
        </tr>
        <tr style='border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;'>
          <td style='padding: 12px 14px; font-weight: 600; color: #334155;'>전력 인입 소요 기간</td>
          <td style='padding: 12px 14px; color: #DC2626;'>4~7년 (계통 혼잡 및 변전소 증설 지연)</td>
          <td style='padding: 12px 14px; color: #059669; font-weight: 600;'>1~2년 (발전원 인접 부지 구축 즉시 수전)</td>
          <td style='padding: 12px 14px; color: #475569;'>1~2년 (설비 조달 및 환경 인허가 의존)</td>
        </tr>
        <tr style='border-bottom: 1px solid #E2E8F0; background-color: #FFFFFF;'>
          <td style='padding: 12px 14px; font-weight: 600; color: #334155;'>송전망 이용료(Tariff)</td>
          <td style='padding: 12px 14px; color: #475569;'>전액 부과 (계통 혼잡료 및 송배전 비용)</td>
          <td style='padding: 12px 14px; color: #059669; font-weight: 600;'>절감 또는 면제 (공용 송전망 비이용)</td>
          <td style='padding: 12px 14px; color: #475569;'>없음 (자체 연료 구매비 발생)</td>
        </tr>
        <tr style='border-bottom: 1px solid #E2E8F0; background-color: #F8FAFC;'>
          <td style='padding: 12px 14px; font-weight: 600; color: #334155;'>기저부하 가동 지속성</td>
          <td style='padding: 12px 14px; color: #475569;'>전력망 공급 안정성에 의존 (정전 취약)</td>
          <td style='padding: 12px 14px; color: #1D4ED8; font-weight: 600;'>원전·가스터빈 직결로 24/7 상시 안정</td>
          <td style='padding: 12px 14px; color: #DC2626;'>연료 보급 한계 (수십 시간 수준 연속 가동)</td>
        </tr>
        <tr style='background-color: #FFFFFF;'>
          <td style='padding: 12px 14px; font-weight: 600; color: #334155;'>주요 인허가 쟁점</td>
          <td style='padding: 12px 14px; color: #475569;'>송전선로 수용성 및 변전소 인허가</td>
          <td style='padding: 12px 14px; color: #D97706; font-weight: 600;'>계통운영사(FERC 등) 전력망 비용 전가 분쟁</td>
          <td style='padding: 12px 14px; color: #475569;'>대기오염물질 배출 및 소음 규제</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계) -->
  <div style='border-left: 4px solid #2563EB; padding-left: 16px; margin-bottom: 24px;'>
    <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; margin: 0 0 6px 0;'>🏢 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계)</h2>
  </div>

  <div style='background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 22px; margin-bottom: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);'>
    <h3 style='font-size: 16px; font-weight: 700; color: #0F172A; margin: 0 0 10px 0;'>구글의 3.6GW 원전 장기 계약과 하이퍼스케일러의 직결 전략</h3>
    <p style='font-size: 15px; color: #334155; margin-bottom: 14px;'>
      금일 공개된 인프라 시장의 최대 화두는 <strong>구글(Alphabet)이 콘스텔레이션 에너지(Constellation Energy)와 체결한 20년 장기 전력 공급 계약(최대 43억 달러 규모)</strong>입니다. 구글은 미국 최대 전력망 운영 지역인 PJM 계통 내에서 가동 중인 원전 11기로부터 총 890MW에 달하는 신규 용량을 선제 확보하여 기저부하(Baseload Power)를 데이터센터 전력망으로 흡수하기로 결정했습니다.
    </p>
    <p style='font-size: 15px; color: #334155; margin-bottom: 14px;'>
      이와 같은 행보는 아마존(AWS)이 펜실베이니아주 수스퀘하나 원자력 발전소 부지 내 960MW 규모의 데이터센터 캠퍼스를 조성하며 추진했던 <strong>원전-데이터센터 BTM 병치(Co-location) 모델</strong>의 연장선에 있습니다. AWS는 공용 송전망을 통하지 않고 원전 발전기에서 나오는 기저 전력을 구내 직결 피더선으로 직접 인입하는 구조를 구축했습니다.
    </p>
    <p style='font-size: 15px; color: #334155; margin: 0;'>
      또한 오늘 보도된 펜실베이니아주 핏 에너지(Fit Energy)의 천연가스 연료전지 도입 합의와 유타주의 9,000에이커 규모 원전 데이터센터 제안 역시, 공용 송전선로 포화로 인해 신규 인입이 막힌 하이퍼스케일러들이 <strong>발전원 부지에 데이터센터를 직접 붙이는 BTM 온사이트 아키텍처</strong>를 유일한 현실적 대안으로 채택하고 있음을 명확히 보여줍니다.
    </p>
  </div>

  <!-- 4. 기술적 장단점 및 도입 시 고려사항 -->
  <div style='border-left: 4px solid #2563EB; padding-left: 16px; margin-bottom: 24px;'>
    <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; margin: 0 0 6px 0;'>⚖️ 4. 기술적 장단점 및 도입 시 고려사항</h2>
  </div>

  <div style='display: grid; grid-template-columns: 1fr; gap: 16px; margin-bottom: 28px;'>
    <!-- 장점 카드 -->
    <div style='background-color: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 10px; padding: 18px;'>
      <h3 style='color: #166534; font-size: 15px; font-weight: 700; margin: 0 0 8px 0;'>핵심 공학적 이점</h3>
      <ul style='margin: 0; padding-left: 20px; color: #15803D; font-size: 14px; line-height: 1.7;'>
        <li><strong>전력 조달 시간(Time-to-Power) 단축:</strong> 5년 이상 소요되는 공용 송전선로 증설 없이 12~24개월 내 수백 메가와트급 수전 가능</li>
        <li><strong>장기 전력 단가 고정화:</strong> 도매 전력 시장의 SMP(계통한계가격) 급등락에 노출되지 않고 15~20년 장기 고정 가격으로 TCO 방어</li>
        <li><strong>탄소 배출 계수 제로화:</strong> 원자력, 지열, 수소 연료전지와 직결 시 간헐성 없는 24/7 무탄소 전력(CFE) 공급 달성</li>
      </ul>
    </div>

    <!-- 제약 및 주의점 카드 -->
    <div style='background-color: #FEF2F2; border: 1px solid #FECACA; border-radius: 10px; padding: 18px;'>
      <h3 style='color: #991B1B; font-size: 15px; font-weight: 700; margin: 0 0 8px 0;'>실무 도입 시 고려사항 &amp; 규제 리스크</h3>
      <ul style='margin: 0; padding-left: 20px; color: #B91C1C; font-size: 14px; line-height: 1.7;'>
        <li><strong>규제 기관(FERC 등)의 비용 전가 시비:</strong> 발전소가 기존 공용망 공급을 줄이고 데이터센터에 전력을 직결할 경우, 공용망 유지비용이 일반 소비자에게 전가된다는 이유로 규제 당국(FERC)의 제동 위험 존재</li>
        <li><strong>발전원 트립(Trip) 대비 인터록 설계:</strong> 원전 등 단일 발전기 불시 셧다운 시 수백 MW 부하를 공용망으로 즉각 절체하거나 단계적 부하 차단(Load Shedding)을 수행할 고속 STS 및 PLC 인터록 필수</li>
        <li><strong>보안 및 방사선 방호 구역 제약:</strong> 원자력 발전소 인접 부지(EPZ) 구축 시 일반 상업 데이터센터보다 강화된 물리적 보안 프로토콜 및 방호벽 설계 수반</li>
      </ul>
    </div>
  </div>

  <!-- 5. 엔지니어/실무자를 위한 1줄 인사이트 -->
  <div style='border-left: 4px solid #2563EB; padding-left: 16px; margin-bottom: 20px;'>
    <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; margin: 0 0 6px 0;'>💡 5. 엔지니어/실무자를 위한 1줄 인사이트</h2>
  </div>

  <div style='background: linear-gradient(90deg, #1E293B 0%, #0F172A 100%); border-radius: 12px; padding: 20px 24px; color: #FFFFFF;'>
    <blockquote style='margin: 0; font-size: 15px; font-weight: 600; line-height: 1.7; color: #F1F5F9; border-left: 3px solid #38BDF8; padding-left: 14px;'>
      "송전 계통 연계에 5년 이상이 소요되는 AI 전력 고갈 시대에, BTM은 단순한 전력 수급 옵션을 넘어 하이퍼스케일 인프라의 시장 출시 시점(Time-to-Market)을 결정짓는 핵심 물리 아키텍처다."
    </blockquote>
  </div>

</div>