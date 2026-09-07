---
id: 2026-09-08-infra-glossary
title: "[인프라 용어사전] PMDC (Prefabricated Modular Data Center) - 현장 타설을 넘어 공장 표준화 조립으로 공기를 50% 단축하는 AI 전산실 아키텍처"
date: 2026-09-08
time: "06:11"
category: Terminology
status: published
summary: "Infrastructure Tech Glossary 분류: 데이터센터 하드웨어 & 건축 엔지니어링 PMDC (Prefabricated Modular Data Center) 현장에서 철근 콘크리트 골조를 올리고 배관을 용접하던 전통적 건축 방식을 탈피하여, 전력·냉각·IT 랙 모듈을 통제된 공장에서 80% 이상 사전 제작(Pre-fabrication) 및 사"
labels:
  - 인프라용어사전
  - IT백과사전
  - PMDC
  - 모듈러데이터센터
  - 데이터센터
---

<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.8; color: #1E293B; background-color: #FFFFFF; max-width: 840px; margin: 0 auto; padding: 20px;">

  <!-- 개요 카드 -->
  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px; margin-bottom: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <div style="display: flex; align-items: center; margin-bottom: 12px;">
      <span style="background-color: #2563EB; color: #FFFFFF; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; margin-right: 8px;">Infrastructure Tech Glossary</span>
      <span style="color: #64748B; font-size: 14px;">분류: 데이터센터 하드웨어 &amp; 건축 엔지니어링</span>
    </div>
    <h1 style="font-size: 26px; font-weight: 800; color: #0F172A; margin: 0 0 12px 0; line-height: 1.3;">PMDC (Prefabricated Modular Data Center)</h1>
    <p style="font-size: 15px; color: #475569; margin: 0; line-height: 1.6;">
      현장에서 철근 콘크리트 골조를 올리고 배관을 용접하던 전통적 건축 방식을 탈피하여, 전력·냉각·IT 랙 모듈을 통제된 공장에서 80% 이상 사전 제작(Pre-fabrication) 및 사전 시험(Pre-commissioning)한 뒤 현장으로 운송하여 블록처럼 결합하는 표준화 조립식 데이터센터 공법.
    </p>
  </div>

  <!-- 1. 30초 핵심 요약 & 개념 정의 -->
  <div style="margin-bottom: 36px;">
    <h2 style="font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-bottom: 16px;">📌 1. 30초 핵심 요약 &amp; 개념 정의</h2>
    <p style="font-size: 15px; margin-bottom: 14px; text-align: justify;">
      <strong>PMDC(Prefabricated Modular Data Center, 프리패브 모듈러 데이터센터)</strong>는 데이터센터 구축에 소요되는 시간과 품질 편차를 극복하기 위해 등장한 고속 인프라 엔지니어링 아키텍처입니다. 쉽게 비유하자면, 현장에서 벽돌을 하나하나 쌓아 집을 짓는 대신 정밀하게 규격화된 레고 블록이나 선박용 특수 모듈을 공장에서 완제품 형태로 제작한 뒤, 대지 위에서 급배수관과 전력선만 플러그 앤 플레이(Plug &amp; Play) 방식으로 체결하는 시스템입니다.
    </p>
    <p style="font-size: 15px; margin-bottom: 14px; text-align: justify;">
      기존 전통 건축 방식(Stick-Built)은 설계부터 인허가, 토목, 골조 시공, 기계·전기·배관(MEP) 설비 장착, 현장 커미셔닝(Commissioning)까지 통상 24개월에서 36개월 이상의 장기간이 소요되었습니다. 반면 PMDC는 현장 기초 토목 공사가 진행되는 동안 실내 공장에서 IT 룸, 전력 분배 스키드(Power Skid), 냉각 분배 모듈(Cooling Module)을 병렬로 동시 제조합니다. 이를 통해 전체 리드타임을 6개월에서 12개월 수준으로 최대 50~60% 이상 단축할 수 있습니다.
    </p>
  </div>

  <!-- 2. 작동 원리 & 메커니즘 -->
  <div style="margin-bottom: 36px;">
    <h2 style="font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-bottom: 16px;">⚙️ 2. 작동 원리 &amp; 메커니즘</h2>
    <p style="font-size: 15px; margin-bottom: 14px; text-align: justify;">
      PMDC의 핵심 메커니즘은 <strong>'오프사이트 병렬 생산(Off-site Parallel Production)'</strong>과 <strong>'공장 인수 시험(FAT, Factory Acceptance Test)'</strong>의 고도화에 있습니다. 인프라 구축 단계를 분해하면 다음과 같은 3단계 엔지니어링 파이프라인으로 구성됩니다.
    </p>

    <div style="background-color: #F1F5F9; border-radius: 8px; padding: 18px; margin-bottom: 20px;">
      <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #334155; line-height: 1.8;">
        <li><strong>1단계: 오프사이트 표준 모듈 제조 및 사전 검증</strong><br>온·습도가 제어되는 자동화 제조 공장에서 변압기, UPS, 스위치기어, 냉각수 밸브, 랙 유닛을 단일 프레임워크 스키드(Skid)에 정밀 조립합니다. 현장 투입 전 공장 내 부하 시험(Full-Load Bank Test)을 100% 완료하므로 잠재적 장비 불량과 배선 오결함을 출하 전에 차단합니다.</li>
        <li><strong>2단계: 온사이트 토목과의 병렬 공정(Concurrent Execution)</strong><br>부지 기초 콘크리트 타설 및 메인 한전 수전 선로 인입 공사가 진행되는 동일한 시점에 공장 제조가 병렬 진행되므로, 날씨나 현장 노무 환경에 따른 공기 지연 위험(Schedule Slippage)이 구조적으로 배제됩니다.</li>
        <li><strong>3단계: 현장 퀵 도킹 및 인터커넥션(Docking &amp; Interconnection)</strong><br>현장에 도착한 모듈들은 고하중 크레인으로 안착된 후, 건식 퀵 커플링(Dry-Break Quick Connectors) 냉각 배관과 사전 배선된 버스웨이(Busway) 조인트로 신속 체결되어 즉각 전산실 단위 통합 가동 단계로 진입합니다.</li>
      </ul>
    </div>

    <h3 style="font-size: 16px; font-weight: 700; color: #1E293B; margin-bottom: 12px;">전통적 현장 시공(Stick-Built) vs 프리패브 모듈러(PMDC) 비교</h3>
    <div style="overflow-x: auto; margin-bottom: 20px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: left;">
        <thead>
          <tr style="background-color: #1E293B; color: #FFFFFF;">
            <th style="padding: 12px 14px; border: 1px solid #334155;">비교 지표</th>
            <th style="padding: 12px 14px; border: 1px solid #334155;">전통 방식 (Stick-Built)</th>
            <th style="padding: 12px 14px; border: 1px solid #334155;">프리패브 모듈러 (PMDC)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background-color: #FFFFFF;">
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0; font-weight: 600;">구축 리드타임</td>
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0;">24 ~ 36개월 (순차 공정)</td>
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0; color: #2563EB; font-weight: 600;">6 ~ 12개월 (병렬 공정)</td>
          </tr>
          <tr style="background-color: #F8FAFC;">
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0; font-weight: 600;">품질 관리 및 검증</td>
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0;">현장 수작업 조립, 환경 변수 노출</td>
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0;">실내 공장 품질 관리 및 전수 부하 테스트</td>
          </tr>
          <tr style="background-color: #FFFFFF;">
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0; font-weight: 600;">증설 유연성</td>
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0;">대규모 일괄 투자(Over-provisioning)</td>
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0;">블록 단위 단계적 확장(Pay-as-you-grow)</td>
          </tr>
          <tr style="background-color: #F8FAFC;">
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0; font-weight: 600;">고밀도 액체냉각 대응</td>
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0;">현장 배관 설계 변경 시 공기 급증</td>
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0;">CDU 및 액체 배관 통합 스키드로 즉시 납품</td>
          </tr>
          <tr style="background-color: #FFFFFF;">
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0; font-weight: 600;">현장 인력 및 안전 위험</td>
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0;">고숙련 배관·전기 인력 현장 상주 필수</td>
            <td style="padding: 10px 14px; border: 1px solid #E2E8F0;">현장 체결 위주로 작업 인력 및 사고율 최소화</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- 3. 오늘자 실제 적용 사례 -->
  <div style="margin-bottom: 36px;">
    <h2 style="font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-bottom: 16px;">🏢 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계)</h2>
    <p style="font-size: 15px; margin-bottom: 14px; text-align: justify;">
      오늘 발표된 주요 인프라 소식에 따르면, <strong>LG유플러스와 GS건설</strong>은 급증하는 인공지능(AI) 컴퓨팅 수요에 대응하여 AI 데이터센터 구축 기간을 단축하기 위한 <strong>'PMDC 표준 모델'</strong> 공동 개발 및 사업화 협력을 전격 체결했습니다. 양사는 건설사의 모듈러 프리패브 설계 기술과 통신사의 전산실 운용 역량을 결합해, 고발열 GPU 클러스터를 신속하게 수용할 수 있는 패키지형 조립식 인프라 공급 체계를 완성하겠다는 전략을 발표했습니다.
    </p>
    <p style="font-size: 15px; margin-bottom: 14px; text-align: justify;">
      글로벌 시장에서도 이러한 패러다임 전환이 뚜렷하게 관측됩니다. 비트코인 채굴 기업에서 네오클라우드 및 맞춤형 인프라 공급사로 전환한 <strong>마라(MARA)</strong>는 오늘 구글, 마이크로소프트(MS), 아마존웹서비스(AWS) 등 하이퍼스케일러를 겨냥해 고객 요구 규격대로 전산실을 빠르게 제작해 넘기는 <strong>'빌드투수트(Build-To-Suit, BTS)'</strong> 전략을 공식 발표했습니다.
    </p>
    <p style="font-size: 15px; margin-bottom: 14px; text-align: justify;">
      앤트로픽이 AWS 클라우드에 1,000억 달러(약 135조 원) 규모의 천문학적 컴퓨팅 지출을 약정하고, 마이크로소프트와 엔비디아가 전력과 냉각망 확보에 사활을 거는 현시점에서, 연산 인프라 사업자의 승패는 <strong>'데이터센터를 얼마나 빨리 지어 전력을 인입시키느냐(Time-to-Market)'</strong>에 달려 있습니다. PMDC는 바로 이 속도전을 가능케 하는 하드웨어 건축 표준으로 급부상하고 있습니다.
    </p>
  </div>

  <!-- 4. 기술적 장단점 및 도입 시 고려사항 -->
  <div style="margin-bottom: 36px;">
    <h2 style="font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin-bottom: 16px;">⚖️ 4. 기술적 장단점 및 도입 시 고려사항</h2>
    
    <div style="margin-bottom: 16px;">
      <h3 style="font-size: 15px; font-weight: 700; color: #047857; margin-bottom: 6px;">핵심 기술적 이점 (Pros)</h3>
      <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #334155; line-height: 1.7;">
        <li><strong>압도적인 시장 진입 속도:</strong> 설계와 시공 병렬화를 통해 전통 방식 대비 인프라 가동 시점을 1년 이상 앞당겨 GPU 투자 회수(ROI) 시기를 극대화합니다.</li>
        <li><strong>품질 균일성 및 결함률 감소:</strong> 기후 변수의 영향을 받지 않는 실내 공장에서 용접, 절연, 배관 시공이 정밀 제어되므로 가동 초기 장애(Infant Mortality)가 대폭 줄어듭니다.</li>
        <li><strong>단계적 자본 지출(CapEx Pacing):</strong> 처음부터 대규모 센터를 일괄 완공할 필요 없이, 수요 발생에 맞춰 블록 단위(Pod 단위)로 모듈을 추가 입고할 수 있어 초기 금융 비용을 절감합니다.</li>
      </ul>
    </div>

    <div>
      <h3 style="font-size: 15px; font-weight: 700; color: #B91C1C; margin-bottom: 6px;">엔지니어링 제약 및 고려사항 (Cons &amp; Constraints)</h3>
      <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #334155; line-height: 1.7;">
        <li><strong>물류 및 운송 한계(Logistics Envelope):</strong> 완성된 모듈은 도로 폭, 터널 높이, 교량 내하중 등 물리적 수송 규격(Shipping Envelope)의 제약을 받으므로 내부 랙 배치 및 통로 설계의 공간 집약도가 기존 초대형 단일 홀 대비 다소 제한될 수 있습니다.</li>
        <li><strong>전력망 인입(Grid Tie-in)과의 불일치:</strong> 모듈 자체를 6개월 만에 현장에 안착시키더라도, 한전의 초고압 변전소 계통 연계나 특고압 변압기 리드타임이 뒤처지면 모듈이 완공된 채 유휴 상태로 대기하는 '계통 병목(Grid Bottleneck)' 현상이 발생할 수 있습니다.</li>
        <li><strong>인터페이스 규격 종속성:</strong> 냉각 배관 직경, 퀵 커플링 규격, 전력 버스웨이 체결부가 초기 표준에 종속되므로, 차세대 고발열 GPU(랙당 100kW 초과 수랭 규격)로의 전환 시 모듈 간 호환성을 선제적으로 설계해야 합니다.</li>
      </ul>
    </div>
  </div>

  <!-- 5. 엔지니어/실무자를 위한 1줄 인사이트 -->
  <div style="background-color: #EFF6FF; border-left: 4px solid #3B82F6; padding: 18px 20px; border-radius: 0 8px 8px 0;">
    <h3 style="font-size: 15px; font-weight: 700; color: #1E40AF; margin: 0 0 6px 0;">💡 엔지니어/실무자를 위한 1줄 인사이트</h3>
    <p style="font-size: 14px; color: #1E3A8A; margin: 0; font-weight: 600; line-height: 1.6;">
      "AI 칩의 세대교체 주기가 1년으로 압축된 시대에 데이터센터는 더 이상 거대한 부동산 영구 건축물이 아니라, 공장에서 정밀 검증되어 플러그만 꽂으면 즉시 가동되는 표준화된 '모듈형 연산 패키지 제품'으로 진화하고 있습니다."
    </p>
  </div>

</div>